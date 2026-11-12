import { clubBadges, photoCredits } from '../lib/media';

const badgeNames: Record<string, string> = {
  ARS: 'Arsenal',
  AVL: 'Aston Villa',
  BOU: 'AFC Bournemouth',
  BRE: 'Brentford',
  BHA: 'Brighton & Hove Albion',
  BUR: 'Burnley',
  CHE: 'Chelsea',
  CRY: 'Crystal Palace',
  EVE: 'Everton',
  FUL: 'Fulham',
  LEE: 'Leeds United',
  LIV: 'Liverpool',
  MCI: 'Manchester City',
  MUN: 'Manchester United',
  NEW: 'Newcastle United',
  NFO: 'Nottingham Forest',
  SUN: 'Sunderland',
  TOT: 'Tottenham Hotspur',
  WHU: 'West Ham United',
  WOL: 'Wolverhampton Wanderers'
};

export function CreditsPage() {
  return (
    <div className="container credits-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <span>Photo credits</span>
      </nav>

      <header className="credits-header">
        <span className="eyebrow">
          <span className="eyebrow__dot" />
          Media and licensing
        </span>
        <h1>Photo credits</h1>
        <p>
          PitchPass is an educational prototype. This page lists where the badges, photographs
          and diagrams on the site come from, and the licence each one is used under.
        </p>
      </header>

      <section className="credits-section">
        <div className="section-heading section-heading--small">
          <div className="section-heading__copy">
            <span className="eyebrow">Badges</span>
            <h2>Club crests</h2>
          </div>
        </div>
        <p className="credits-note">
          Club badges are the official crests of their respective clubs. They are used here for
          identification in a non-commercial, educational prototype and remain the property of
          their clubs. They are not licensed for reuse. PitchPass is not affiliated with the
          Premier League or any club.
        </p>
        <div className="badge-credit-grid">
          {Object.entries(clubBadges).map(([initials, badge]) => (
            <a
              className="badge-credit"
              href={badge.source}
              target="_blank"
              rel="noreferrer"
              key={initials}
            >
              <img src={badge.src} alt="" loading="lazy" decoding="async" />
              <span>{badgeNames[initials] ?? initials}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="credits-section">
        <div className="section-heading section-heading--small">
          <div className="section-heading__copy">
            <span className="eyebrow">Photography</span>
            <h2>Photographs and diagrams</h2>
          </div>
        </div>
        <p className="credits-note">
          Photographs and diagrams are from Wikimedia Commons. Each item is credited to its
          author and used under the licence shown. Images may have been resized or cropped for
          the web.
        </p>
        <ul className="photo-credit-list">
          {photoCredits.map((image) => (
            <li key={image.src}>
              <img src={image.thumb ?? image.src} alt="" loading="lazy" decoding="async" />
              <div>
                <strong>{image.caption}</strong>
                <span>
                  {image.credit.author} · {image.credit.license}
                </span>
                <a href={image.credit.source} target="_blank" rel="noreferrer">
                  View source on Wikimedia Commons
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="credits-section credits-section--last">
        <div className="inline-banner">
          <div>
            <span className="eyebrow">
              <span className="eyebrow__dot" />
              Something wrong?
            </span>
            <h2>Spotted a missing credit?</h2>
            <p>Open an issue in the repository and we will correct it.</p>
          </div>
          <a
            className="btn btn--primary"
            href="https://github.com/Davi1999/pitchpass/issues"
            target="_blank"
            rel="noreferrer"
          >
            Open an issue
          </a>
        </div>
      </section>
    </div>
  );
}
