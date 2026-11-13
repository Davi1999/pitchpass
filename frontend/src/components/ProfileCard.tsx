import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import type { EraProfile } from '../types';
import { eraPortraits } from '../lib/media';
import { ClubCrest } from './ClubCrest';
import { ArrowRight } from './Icons';

export function ProfileCard({ profile }: { profile: EraProfile }) {
  const portrait = eraPortraits[profile.slug];
  const basePath = profile.kind === 'player' ? 'players' : 'managers';
  const style = {
    '--profile-primary': profile.club?.colors.primary ?? '#0d3b26',
    '--profile-secondary': profile.club?.colors.secondary ?? '#d7ff4f'
  } as CSSProperties;

  return (
    <Link className="profile-card" to={`/era/${basePath}/${profile.slug}`} style={style}>
      <div className="profile-card__media">
        {portrait ? (
          <img
            src={portrait.thumb ?? portrait.src}
            alt={portrait.alt}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="profile-card__monogram" aria-hidden="true">
            {profile.name
              .split(' ')
              .map((part) => part[0])
              .slice(0, 2)
              .join('')}
          </span>
        )}
        <span className="profile-card__kind">{profile.kind === 'player' ? 'Player' : 'Manager'}</span>
      </div>
      <div className="profile-card__body">
        <div className="profile-card__meta">
          <span>{profile.role}</span>
          {profile.club && (
            <>
              <span className="meta-dot" />
              <span className="profile-card__club">
                <ClubCrest
                  name={profile.club.name}
                  initials={profile.club.initials}
                  colors={profile.club.colors}
                  size="xs"
                />
                {profile.club.name}
              </span>
            </>
          )}
        </div>
        <h3>{profile.name}</h3>
        <p>{profile.summary}</p>
        <span className="profile-card__cta">
          Read profile
          <ArrowRight />
        </span>
      </div>
    </Link>
  );
}
