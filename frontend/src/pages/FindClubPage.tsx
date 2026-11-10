import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/client';
import { ClubCrest } from '../components/ClubCrest';
import { ArrowRight, Check, ChevronLeft, Heart } from '../components/Icons';
import { PageHeader } from '../components/PageHeader';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import { getMyClub, saveMyClub } from '../lib/progress';
import type { FindResponse } from '../types';

type Phase = 'intro' | 'wizard' | 'results';

export function FindClubPage() {
  const questionsState = useApi(api.getFindQuestions, []);
  const clubsState = useApi(api.getClubs, []);
  const [phase, setPhase] = useState<Phase>('intro');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<FindResponse | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [myClub, setMyClub] = useState<string | null>(() => getMyClub());

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [phase, step]);

  if (questionsState.loading) return <PageSkeleton />;
  if (questionsState.error || !questionsState.data) {
    return (
      <div className="container section">
        <ErrorState
          message={questionsState.error ?? 'The club finder could not be loaded.'}
          onRetry={questionsState.reload}
        />
      </div>
    );
  }

  const questions = questionsState.data.questions;
  const clubs = clubsState.data?.clubs ?? [];
  const question = questions[step];
  const answered = answers[question?.id] !== undefined;

  function startFinder() {
    setPhase('wizard');
    setStep(0);
    setAnswers({});
    setResult(null);
    setSubmitError(null);
  }

  function chooseOption(optionIndex: number) {
    setAnswers((value) => ({ ...value, [question.id]: optionIndex }));
  }

  async function nextStep() {
    if (!answered) return;

    if (step < questions.length - 1) {
      setStep((value) => value + 1);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const response = await api.findClubs(answers);
      setResult(response);
      setPhase('results');
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Could not score your answers. Try again.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  function previousStep() {
    if (step === 0) {
      setPhase('intro');
      return;
    }
    setStep((value) => value - 1);
  }

  function handleSetClub(clubId: string) {
    saveMyClub(clubId);
    setMyClub(clubId);
  }

  if (phase === 'intro') {
    return (
      <>
        <PageHeader
          eyebrow="Club finder"
          title="Five questions. A club that fits."
          description="This is not a personality test and it is not binding. It is a way to turn “I don’t know who to support” into a shortlist."
        />
        <section className="section section--tight section--last">
          <div className="container">
            <div className="finder-intro">
              <div className="finder-intro__copy">
                <span className="eyebrow">
                  <span className="eyebrow__dot" />
                  No wrong answers
                </span>
                <h2>Pick the matchday you actually want.</h2>
                <p>
                  Big stadium or tight old ground? Trophies or underdogs? London noise or a
                  northern away day? We will weigh your answers against the personality of
                  all 20 clubs.
                </p>
                <ul className="finder-steps">
                  <li>
                    <span>01</span> Answer five quick questions
                  </li>
                  <li>
                    <span>02</span> Get three suggested clubs
                  </li>
                  <li>
                    <span>03</span> Read their pages and watch a match
                  </li>
                </ul>
                <button className="btn btn--primary" type="button" onClick={startFinder}>
                  Start the finder
                  <ArrowRight />
                </button>
                <p className="small-note">
                  Takes about two minutes. You can retake it as many times as you like.
                </p>
              </div>

              <div className="finder-intro__crests" aria-hidden="true">
                {clubs.slice(0, 12).map((club, index) => (
                  <span
                    className="finder-intro__crest"
                    style={{ '--delay': `${index * 0.04}s` } as CSSProperties}
                    key={club.id}
                  >
                    <ClubCrest
                      name={club.name}
                      initials={club.initials}
                      colors={club.colors}
                      size={index % 3 === 0 ? 'lg' : 'md'}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (phase === 'wizard') {
    return (
      <div className="container finder-page">
        <div className="finder-topbar">
          <button className="text-button" type="button" onClick={previousStep}>
            <ChevronLeft /> {step === 0 ? 'Back to intro' : 'Previous question'}
          </button>
          <span>
            Question {step + 1} of {questions.length}
          </span>
        </div>

        <div
          className="quiz-progress"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={questions.length}
          aria-valuenow={step + 1}
        >
          <span style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
        </div>

        <div className="finder-card">
          <span className="eyebrow">
            <span className="eyebrow__dot" />
            Club finder
          </span>
          <h1>{question.prompt}</h1>
          <p className="finder-card__helper">{question.helper}</p>

          <div className="finder-options" role="group" aria-label="Answer options">
            {question.options.map((option, optionIndex) => (
              <button
                className={`finder-option${answers[question.id] === optionIndex ? ' is-selected' : ''}`}
                type="button"
                key={option.label}
                onClick={() => chooseOption(optionIndex)}
                aria-pressed={answers[question.id] === optionIndex}
              >
                <span className="finder-option__check">
                  {answers[question.id] === optionIndex && <Check />}
                </span>
                <span>
                  <strong>{option.label}</strong>
                  <span>{option.description}</span>
                </span>
              </button>
            ))}
          </div>

          {submitError && (
            <p className="form-error" role="alert">
              {submitError}
            </p>
          )}

          <div className="finder-card__actions">
            <button className="text-button" type="button" onClick={previousStep}>
              <ChevronLeft /> Back
            </button>
            <button
              className="btn btn--primary"
              type="button"
              disabled={!answered || submitting}
              onClick={nextStep}
            >
              {submitting
                ? 'Matching…'
                : step === questions.length - 1
                  ? 'See my clubs'
                  : 'Next question'}
              {!submitting && <ArrowRight />}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="container section">
        <ErrorState message="No results yet. Try the finder again." onRetry={startFinder} />
      </div>
    );
  }

  const top = result.results[0];
  const topStyle = {
    '--club-primary': top.club.colors.primary,
    '--club-secondary': top.club.colors.secondary,
    '--match-percent': `${top.matchScore}%`
  } as CSSProperties;

  return (
    <div className="container finder-results">
      <header className="finder-results__header">
        <span className="eyebrow">
          <span className="eyebrow__dot" />
          Your shortlist
        </span>
        <h1>Meet your best matches.</h1>
        <p>
          Based on the matchday you picked, these three clubs line up best. Treat it as a
          starting point, not a lifelong contract.
        </p>
        <button className="text-button" type="button" onClick={startFinder}>
          Retake the finder
        </button>
      </header>

      <section className="top-match" style={topStyle}>
        <div className="top-match__crest">
          <ClubCrest
            name={top.club.name}
            initials={top.club.initials}
            colors={top.club.colors}
            size="xl"
          />
        </div>
        <div className="top-match__copy">
          <span className="top-match__label">Your strongest match</span>
          <h2>{top.club.name}</h2>
          <p className="top-match__nickname">
            {top.club.nickname} · {top.club.city}
          </p>
          <p>{top.club.summary}</p>
          <div className="tag-row">
            {top.reasons.map((reason) => (
              <span className="tag tag--on-color" key={reason}>
                {reason}
              </span>
            ))}
          </div>
          <div className="top-match__actions">
            <Link className="btn btn--light" to={`/clubs/${top.club.id}`}>
              Meet {top.club.name}
              <ArrowRight />
            </Link>
            <button
              className={
                myClub === top.club.id ? 'btn btn--accent' : 'btn btn--outline-light'
              }
              type="button"
              onClick={() => handleSetClub(top.club.id)}
              aria-pressed={myClub === top.club.id}
            >
              {myClub === top.club.id ? (
                <>
                  <Check /> Your club
                </>
              ) : (
                'Set as my club'
              )}
            </button>
          </div>
        </div>
        <div className="top-match__score">
          <span>Match</span>
          <strong>{top.matchScore}%</strong>
          <div className="top-match__bar">
            <span style={{ width: `${top.matchScore}%` }} />
          </div>
          <p>{top.club.vibe}</p>
        </div>
      </section>

      <section className="finder-alternatives">
        <h2>Also worth a look</h2>
        <div className="alternative-grid">
          {result.results.slice(1).map((entry) => (
            <article className="alternative-card" key={entry.club.id}>
              <div className="alternative-card__top">
                <ClubCrest
                  name={entry.club.name}
                  initials={entry.club.initials}
                  colors={entry.club.colors}
                  size="md"
                />
                <span className="alternative-card__score">{entry.matchScore}% match</span>
              </div>
              <h3>{entry.club.name}</h3>
              <p className="alternative-card__nickname">
                {entry.club.nickname} · {entry.club.city}
              </p>
              <p>{entry.club.summary}</p>
              <div className="tag-row">
                {entry.reasons.slice(0, 3).map((reason) => (
                  <span className="tag tag--soft" key={reason}>
                    {reason}
                  </span>
                ))}
              </div>
              <Link className="text-link" to={`/clubs/${entry.club.id}`}>
                Meet the club
                <ArrowRight />
              </Link>
            </article>
          ))}
        </div>

        {result.alternatives.length > 0 && (
          <div className="also-considered">
            <span className="also-considered__label">Also considered</span>
            {result.alternatives.map((entry) => (
              <Link to={`/clubs/${entry.club.id}`} key={entry.club.id}>
                <ClubCrest
                  name={entry.club.name}
                  initials={entry.club.initials}
                  colors={entry.club.colors}
                  size="xs"
                />
                {entry.club.name}
              </Link>
            ))}
            <Link className="text-link" to="/clubs">
              Browse all 20 clubs
              <ArrowRight />
            </Link>
          </div>
        )}
      </section>

      <div className="finder-disclaimer">
        <Heart />
        <p>
          A club is a long relationship, not a BuzzFeed result. Read the pages, watch a few
          matches and see who you keep thinking about after the final whistle.
        </p>
      </div>
    </div>
  );
}
