import { clubs } from '../data/clubs.js';
import { discoveryQuestions, traitLabels } from '../data/discovery.js';

export function getDiscoveryQuestions() {
  return discoveryQuestions.map((question) => ({
    id: question.id,
    prompt: question.prompt,
    helper: question.helper,
    options: question.options.map(({ label, description }) => ({ label, description }))
  }));
}

export function validateAnswers(answers) {
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
    return 'Answers must be an object keyed by question id.';
  }

  for (const question of discoveryQuestions) {
    const value = answers[question.id];
    if (!Number.isInteger(value) || value < 0 || value >= question.options.length) {
      return `Missing or invalid answer for "${question.id}".`;
    }
  }

  return null;
}

export function findClubs(answers) {
  const weightsByTrait = {};

  for (const question of discoveryQuestions) {
    const option = question.options[answers[question.id]];
    for (const [trait, weight] of Object.entries(option.weights)) {
      weightsByTrait[trait] = (weightsByTrait[trait] ?? 0) + weight;
    }
  }

  const maxPossible = discoveryQuestions.reduce((total, question) => {
    const bestOption = Math.max(
      ...question.options.map((option) =>
        Object.values(option.weights).reduce((sum, weight) => sum + weight, 0)
      )
    );
    return total + bestOption;
  }, 0);

  const ranked = clubs
    .map((club) => {
      const matchedTraits = club.traits
        .filter((trait) => weightsByTrait[trait])
        .sort((a, b) => weightsByTrait[b] - weightsByTrait[a]);

      const score = matchedTraits.reduce((sum, trait) => sum + weightsByTrait[trait], 0);

      return {
        club,
        score,
        reasons: matchedTraits.slice(0, 4).map((trait) => traitLabels[trait] ?? trait)
      };
    })
    .sort((a, b) => b.score - a.score || a.club.name.localeCompare(b.club.name));

  const toResult = (entry) => ({
    club: entry.club,
    matchScore: Math.min(99, Math.round((entry.score / maxPossible) * 100)),
    reasons: entry.reasons
  });

  return {
    results: ranked.slice(0, 3).map(toResult),
    alternatives: ranked.slice(3, 5).map(toResult)
  };
}
