import type { ComponentType, SVGProps } from 'react';
import {
  ArrowsLeftRight,
  Ball,
  BookOpen,
  Card,
  Chat,
  Clock,
  Compass,
  Flag,
  Flame,
  Flask,
  Heart,
  Monitor,
  Question,
  Shield,
  Trophy
} from './Icons';

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const guideIcons: Record<string, Icon> = {
  'premier-league-explained': Shield,
  'offside-explained': Flag,
  'var-explained': Monitor,
  'cards-and-fouls': Card,
  'matchday-basics': Clock,
  'transfer-windows': ArrowsLeftRight,
  'positions-explained': Compass,
  'cups-and-europe': Trophy,
  'how-to-pick-a-club': Heart,
  'derbies-and-rivalries': Flame,
  'football-glossary': Chat
};

const newsIcons: Record<string, Icon> = {
  'Starter kit': BookOpen,
  Rules: Flag,
  'The league': Shield,
  Transfers: ArrowsLeftRight,
  Culture: Flame,
  PitchPass: Compass
};

export function GuideIcon({ slug }: { slug: string }) {
  const Icon = guideIcons[slug] ?? BookOpen;
  return <Icon />;
}

export function NewsIcon({ category }: { category: string }) {
  const Icon = newsIcons[category] ?? Chat;
  return <Icon />;
}

export function PathIcon({ kind }: { kind: 'learn' | 'clubs' | 'finder' }) {
  if (kind === 'clubs') return <Shield />;
  if (kind === 'finder') return <Compass />;
  return <BookOpen />;
}

export function EventIcon({ type }: { type: string }) {
  if (type === 'goal') return <Ball />;
  if (type === 'yellow' || type === 'red') return <Card />;
  if (type === 'sub') return <ArrowsLeftRight />;
  if (type === 'var') return <Monitor />;
  return <Question />;
}

export function DemoIcon() {
  return <Flask />;
}
