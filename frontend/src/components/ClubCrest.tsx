import type { CSSProperties } from 'react';
import type { ClubColors } from '../types';

interface ClubCrestProps {
  name: string;
  initials: string;
  colors: ClubColors;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function ClubCrest({ name, initials, colors, size = 'md', className = '' }: ClubCrestProps) {
  const style = {
    '--crest-primary': colors.primary,
    '--crest-secondary': colors.secondary,
    '--crest-text': colors.text,
    background: `linear-gradient(140deg, ${colors.primary} 0 58%, ${colors.secondary} 58% 100%)`
  } as CSSProperties;

  return (
    <span
      className={`crest crest--${size} ${className}`.trim()}
      style={style}
      role="img"
      aria-label={`${name} badge`}
      title={name}
    >
      <span className="crest__initials">{initials}</span>
    </span>
  );
}
