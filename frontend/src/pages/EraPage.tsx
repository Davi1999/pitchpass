import { Link } from 'react-router-dom';
import { api } from '../api/client';
import { GuideCard } from '../components/GuideCard';
import { ProfileCard } from '../components/ProfileCard';
import { SeasonCard } from '../components/SeasonCard';
import { SectionHeading } from '../components/SectionHeading';
import { StoryCard } from '../components/StoryCard';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, Spark } from '../components/Icons';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';

export function EraPage() {
  const { data, loading, error, reload } = useApi(api.getEra, []);

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'The modern era section could not be loaded.'} onRetry={reload} />
      </div>
    );
  }

  const { meta, players, managers, stories, seasons, guides } = data;
  const featuredPlayers = players.filter((profile) => profile.featured).slice(0, 6);
  const featuredManagers = managers.filter((profile) => profile.featured).slice(0, 4);
  const featuredStories = stories.filter((story) => story.featured).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={meta.label} title={meta.title} description={meta.description}>
        <Link className="btn btn--primary btn--sm" to="/learn/modern-era-primer">
          Start with the primer
          <ArrowRight />
        </Link>
      </PageHeader>

      <section className="section section--tight">
        <div className="container">
          <div className="era-hero">
            <div className="era-hero__copy">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow__dot" />
                {meta.seasons} · {meta.updated}
              </span>
              <h2>The league you are watching now</h2>
              <p>{meta.introduction}</p>
              <div className="era-stats">
                {meta.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <ol className="era-timeline">
              {meta.timeline.map((entry) => (
                <li key={entry.year}>
                  <span className="era-timeline__year">{entry.year}</span>
                  <div>
                    <strong>{entry.title}</strong>
                    <p>{entry.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p className="era-disclaimer">{meta.disclaimer}</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Get up to speed"
            title="Three guides to the current game"
            description="Start with the big changes, then trace the last few seasons and learn how to follow the current one."
            action={{ label: 'All guides', to: '/learn' }}
          />
          <div className="guide-grid">
            {guides.map((guide, index) => (
              <GuideCard guide={guide} index={index} key={guide.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Players"
            title="The players who define the era"
            description="Goalscorers, creators, defenders and goalkeepers — a starting XI of names worth knowing."
            action={{ label: 'All player profiles', to: '/era/players' }}
          />
          <div className="profile-grid">
            {featuredPlayers.map((profile) => (
              <ProfileCard profile={profile} key={profile.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Managers"
            title="The coaches shaping the league"
            description="Different ideas, different styles, same pressure to deliver."
            action={{ label: 'All manager profiles', to: '/era/managers' }}
          />
          <div className="manager-grid">
            {featuredManagers.map((profile) => (
              <ProfileCard profile={profile} key={profile.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Stories"
            title="The stories that explain the era"
            description="Tactics, money, squad depth and the title race — the context behind the headlines."
            action={{ label: 'All stories', to: '/era/stories' }}
          />
          <div className="story-grid">
            {featuredStories.map((story, index) => (
              <StoryCard story={story} featured={index === 0} key={story.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="era-seasons">
            <div className="era-seasons__head">
              <div>
                <span className="eyebrow">Seasons</span>
                <h2>The last four seasons</h2>
                <p>
                  What happened, why it mattered and what carried into the current demo season.
                </p>
              </div>
              <Link className="text-link" to="/era/seasons">
                All season recaps
                <ArrowRight />
              </Link>
            </div>
            <div className="season-grid">
              {seasons.map((season) => (
                <SeasonCard season={season} key={season.slug} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--last">
        <div className="container">
          <div className="inline-banner era-cta">
            <div>
              <span className="eyebrow">
                <span className="eyebrow__dot" />
                Ready for the next step?
              </span>
              <h2>Follow the current season</h2>
              <p>
                Take the era quiz, explore the live hub or find a club to follow through the rest of
                the campaign.
              </p>
            </div>
            <div className="era-cta__actions">
              <Link className="btn btn--accent" to="/quiz">
                <Spark /> Take the quiz
              </Link>
              <Link className="btn btn--ghost" to="/live">
                Open Live Hub
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
