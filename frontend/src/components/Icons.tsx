import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
    ...props
  };
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m15 5-7 7 7 7" />
    </svg>
  );
}

export function Search(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function Refresh(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 11a8 8 0 1 0-2.3 6.3" />
      <path d="M20 4v7h-7" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Spark(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

export function Trophy(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5v1a4 4 0 0 0 4 4M16 6h3v1a4 4 0 0 1-4 4" />
      <path d="M12 12v4M9 20h6M10 16h4v4h-4z" />
    </svg>
  );
}

export function BookOpen(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 6.5C10.4 5.2 8.2 4.5 5 4.5v14c3.2 0 5.4.7 7 2 1.6-1.3 3.8-2 7-2v-14c-3.2 0-5.4.7-7 2Z" />
      <path d="M12 6.5v14" />
    </svg>
  );
}

export function Shield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 4.5 6v5.4c0 4.5 3 8 7.5 9.6 4.5-1.6 7.5-5.1 7.5-9.6V6L12 3Z" />
      <path d="M8.5 12.2 11 14.7l4.5-5" />
    </svg>
  );
}

export function Compass(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function Flag(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 21V4" />
      <path d="M5 5c4-2 6 2 10 0v8c-4 2-6-2-10 0" />
    </svg>
  );
}

export function Monitor(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16.5V20" />
    </svg>
  );
}

export function Card(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="7.5" y="3.5" width="9" height="15" rx="1.4" />
      <path d="M9.5 18.5V21h5v-2.5" />
    </svg>
  );
}

export function ArrowsLeftRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8h15M15 4l4 4-4 4M20 16H5M9 12l-4 4 4 4" />
    </svg>
  );
}

export function Heart(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20s-7.5-4.4-7.5-9.5A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 3.1C19.5 15.6 12 20 12 20Z" />
    </svg>
  );
}

export function Flame(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21c3.5 0 6-2.4 6-5.8 0-4.5-4.2-6.4-4.1-11.2-2.5 1.3-4 3.7-4 5.9 0 1.5.6 2.6 1.1 3.4-1 .1-2-.8-2.4-2.4-1.1 1.2-2.6 3-2.6 5.3C6 18.7 8.5 21 12 21Z" />
    </svg>
  );
}

export function Chat(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-2.6-.4L4 20l1.3-4A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
    </svg>
  );
}

export function Ball(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m12 7 3.2 2.4-1.2 3.8h-4L8.8 9.4 12 7ZM7 15l2.2 3.5M17 15l-2.2 3.5M8.8 9.4 5 10.7M15.2 9.4l3.8 1.3" />
    </svg>
  );
}

export function Flask(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

export function AlertTriangle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10.3 4.5 2.8 18a1.6 1.6 0 0 0 1.5 2.4h15.4a1.6 1.6 0 0 0 1.5-2.4L13.7 4.5a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 16.5h.01" />
    </svg>
  );
}

export function Question(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.6 2.6 0 1 1 3.4 2.5c-.9.4-1.4 1-1.4 2M12 17h.01" />
    </svg>
  );
}
