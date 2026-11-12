import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { ClubColors } from '../types';
import { badgeFor } from '../lib/media';

interface ClubCrestProps {
  name: string;
  initials: string;
  colors: ClubColors;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function ClubCrest({ name, initials, colors, size = 'md', className = '' }: ClubCrestProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const badge = badgeFor(initials);
  const showBadge = Boolean(badge && !imageFailed);

  const style = {
    '--crest-primary': colors.primary,
    '--crest-secondary': colors.secondary,
    '--crest-text': colors.text,
    background: showBadge
      ? 'transparent'
      : `linear-gradient(140deg, ${colors.primary} 0 58%, ${colors.secondary} 58% 100%)`
  } as CSSProperties;

  return (
    <span
      className={`crest crest--${size}${showBadge ? ' crest--badge' : ''} ${className}`.trim()}
      style={style}
      role="img"
      aria-label={`${name} badge`}
      title={name}
    >
      {showBadge && badge ? (
        <img
          src={badge.src}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="crest__initials">{initials}</span>
      )}
    </span>
  );
}
