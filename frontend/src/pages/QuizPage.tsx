import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/client';
import { ArrowRight, Check, Close } from '../components/Icons';
import { PageHeader } from '../components/PageHeader';
import { SectionHeading } from '../components/SectionHeading';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import { getBestScore, saveBestScore } from '../lib/progress';
import type { QuizCheckResult, QuizQuestion } from '../types';

type Phase = 'intro' | 'playing' | 'results';

interface AnswerRecord {
  question: QuizQuestion;
  selected: number;
  correct: boolean;
  correctIndex: number;
  explanation: string;
}

const letters = ['A', 'B', 'C', 'D'];

function resultMessage() {
  return {
    title: 'Quiz complete',
    body: 'Review every answer below.'
  };
}

export function QuizPage() {
  const { data, loading, error, reload } = useApi(() => api.getQuiz(10), []);
  const [phase, setPhase] = useState<Phase>('intro');
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<QuizCheckResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => getBestScore());

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [phase, index]);

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'The quiz could not be loaded.'} onRetry={reload} />
      </div>
    );
  }

  const questions = data.questions;
  const total = questions.length;
  const current = questions[index];
  const percent = total ? Math.round((score / total) * 100) : 0;
  const message = resultMessage();
  const isLast = index === total - 1;

  function startQuiz() {
    setPhase('playing');
    setIndex(0);
    setSelected(null);
    setFeedback(null);
    setAnswers([]);
    setScore(0);
    setSubmitError(null);
  }

  async function chooseAnswer(optionIndex: number) {
    if (feedback || checking) return;

    setSelected(optionIndex);
    setChecking(true);
    setSubmitError(null);

    try {
      const response = await api.checkAnswer(current.id, optionIndex);
      setFeedback(response.result);
      if (response.result.correct) setScore((value) => value + 1);
      setAnswers((value) => [
        ...value,
        {
          question: current,
          selected: optionIndex,
          correct: response.result.correct,
          correctIndex: response.result.correctIndex,
          explanation: response.result.explanation
        }
      ]);
    } catch (answerError) {
      setSubmitError(
        answerError instanceof Error ? answerError.message : 'Could not check that answer.'
      );
    } finally {
      setChecking(false);
    }
  }

  function nextQuestion() {
    if (isLast) {
      saveBestScore(score, total);
      setBest(getBestScore());
      setPhase('results');
      return;
    }

    setIndex((value) => value + 1);
    setSelected(null);
    setFeedback(null);
    setSubmitError(null);
  }

  if (phase === 'intro') {
    return (
      <>
        <PageHeader
          eyebrow="Quiz"
          title="Premier League quiz"
          description="Ten questions with an explanation after each answer."
        />
        <section className="section section--tight section--last">
          <div className="container">
            <div className="quiz-intro">
              <div className="quiz-intro__copy">
                <span className="eyebrow eyebrow--light">
                  <span className="eyebrow__dot" />
                  Quiz
                </span>
                <h2>Rules, league and culture</h2>
                <p>Each question includes a short explanation.</p>
                <ul className="quiz-intro__list">
                  <li>
                    <Check /> {total} questions across rules, the league and culture
                  </li>
                  <li>
                    <Check /> Explanation after each answer
                  </li>
                  <li>
                    <Check /> Full answer review at the end
                  </li>
                </ul>
                <button className="btn btn--accent" type="button" onClick={startQuiz}>
                  Start the quiz
                  <ArrowRight />
                </button>
              </div>
              <div className="quiz-intro__score">
                <span>{best ? 'Your best' : 'Questions'}</span>
                <strong>
                  {best ? best.score : total}
                  {best && <small>/{best.total}</small>}
                </strong>
                <p>{best ? 'correct answers' : 'about five minutes'}</p>
                <div className="quiz-intro__badges">
                  <span className="tag tag--soft">Rules</span>
                  <span className="tag tag--soft">The league</span>
                  <span className="tag tag--soft">Culture</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (phase === 'playing') {
    return (
      <div className="container quiz-page">
        <div className="quiz-topbar">
          <button className="text-button" type="button" onClick={() => setPhase('intro')}>
            Exit quiz
          </button>
          <span>
            Question {index + 1} of {total}
          </span>
          <span className="quiz-topbar__score">{score} correct</span>
        </div>
        <div
          className="quiz-progress"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={index + 1}
        >
          <span style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>

        <div className="quiz-card">
          <div className="quiz-card__meta">
            <span className="tag tag--accent">{current.category}</span>
            <span className="tag">{current.difficulty}</span>
          </div>
          <h1>{current.prompt}</h1>

          <div className="quiz-options" role="group" aria-label="Answer options">
            {current.options.map((option, optionIndex) => {
              let stateClass = '';
              if (feedback) {
                if (optionIndex === feedback.correctIndex) stateClass = 'is-correct';
                else if (optionIndex === selected) stateClass = 'is-wrong';
                else stateClass = 'is-dimmed';
              } else if (selected === optionIndex) {
                stateClass = 'is-selected';
              }

              return (
                <button
                  className={`quiz-option ${stateClass}`.trim()}
                  type="button"
                  key={option}
                  disabled={Boolean(feedback) || checking}
                  onClick={() => chooseAnswer(optionIndex)}
                >
                  <span className="quiz-option__letter">{letters[optionIndex]}</span>
                  <span className="quiz-option__text">{option}</span>
                  {feedback && optionIndex === feedback.correctIndex && (
                    <span className="quiz-option__mark quiz-option__mark--correct">
                      <Check />
                    </span>
                  )}
                  {feedback && optionIndex === selected && !feedback.correct && (
                    <span className="quiz-option__mark quiz-option__mark--wrong">
                      <Close />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {checking && <p className="quiz-checking">Checking your answer…</p>}

          {submitError && (
            <p className="form-error" role="alert">
              {submitError} Try selecting an answer again.
            </p>
          )}

          <div aria-live="polite">
            {feedback && (
              <div className={`quiz-feedback ${feedback.correct ? 'is-correct' : 'is-wrong'}`}>
                <div className="quiz-feedback__head">
                  <span className="quiz-feedback__icon">
                    {feedback.correct ? <Check /> : <Close />}
                  </span>
                  <strong>{feedback.correct ? 'Correct.' : 'Incorrect.'}</strong>
                </div>
                <p>{feedback.explanation}</p>
                <button className="btn btn--primary btn--sm" type="button" onClick={nextQuestion}>
                  {isLast ? 'See my results' : 'Next question'}
                  <ArrowRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const ringStyle = { '--score-percent': `${percent}%` } as CSSProperties;

  return (
    <div className="container quiz-page">
      <div className="quiz-result">
        <span className="eyebrow">
          <span className="eyebrow__dot" />
          Results
        </span>
        <div className="score-ring" style={ringStyle}>
          <div className="score-ring__inner">
            <strong>{score}</strong>
            <span>out of {total}</span>
          </div>
        </div>
        <h1>{message.title}</h1>
        <p>{message.body}</p>
        <div className="quiz-result__actions">
          <button className="btn btn--primary" type="button" onClick={startQuiz}>
            Play again
            <ArrowRight />
          </button>
          <Link className="btn btn--ghost" to="/learn">
            All guides
          </Link>
        </div>
        {best && (
          <p className="quiz-result__best">
            Personal best: <strong>{best.score}/{best.total}</strong>
          </p>
        )}
      </div>

      <section className="quiz-review">
        <SectionHeading eyebrow="Review" title="Every answer, explained" />
        <div className="review-list">
          {answers.map((answer, answerIndex) => (
            <article
              className={`review-row ${answer.correct ? 'review-row--correct' : 'review-row--wrong'}`}
              key={answer.question.id}
            >
              <span className="review-row__number">{String(answerIndex + 1).padStart(2, '0')}</span>
              <div className="review-row__body">
                <h3>{answer.question.prompt}</h3>
                <p className="review-row__answer">
                  <span className={answer.correct ? 'answer-pill is-correct' : 'answer-pill is-wrong'}>
                    {answer.correct ? <Check /> : <Close />}
                    Your answer: {answer.question.options[answer.selected]}
                  </span>
                  {!answer.correct && (
                    <span className="answer-pill is-correct">
                      <Check />
                      Correct: {answer.question.options[answer.correctIndex]}
                    </span>
                  )}
                </p>
                <p className="review-row__explanation">{answer.explanation}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
