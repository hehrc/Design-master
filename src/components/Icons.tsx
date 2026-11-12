type IconProps = {
  className?: string;
  size?: number;
};

export function ArrowUpRight({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowRight({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
    </svg>
  );
}

export function ChevronRight({ className, size = 8 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 5 8" fill="none" aria-hidden="true">
      <path d="M4.94 3.66 1.86.18 0 0l3.05 3.66L0 7.32l1.86-.2 3.08-3.46Z" fill="currentColor" />
    </svg>
  );
}

export function ChevronDown({ className, size = 14 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="m2.5 5 4.5 4.5L11.5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}

export function Play({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 2.5v11l9-5.5-9-5.5Z" fill="currentColor" />
    </svg>
  );
}

export function Check({ className, size = 14 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="m1.5 7.5 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

export function Menu({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

export function Close({ className, size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

export function Clock({ className, size = 14 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.4" stroke="currentColor" strokeWidth="1.1" />
      <path d="M7 4v3.4L9 9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
    </svg>
  );
}

export function Info({ className, size = 14 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.4" stroke="currentColor" strokeWidth="1.1" />
      <path d="M7 6.2v4M7 4.1v.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}

export function Spark({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1.5 10.8 7.2 16.5 9l-5.7 1.8L9 16.5l-1.8-5.7L1.5 9l5.7-1.8L9 1.5Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  );
}

export function Monitor({ className, size = 22 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="13" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 20.5h8M12 17v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
      <path d="M7 9h4M7 12h7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function Layers({ className, size = 22 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function Presentation({ className, size = 22 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3.5" width="18" height="12" rx="1.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 15.5V21M8.5 21h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
      <path d="M7 11l3-3 2.2 2.2L17 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}

export function Target({ className, size = 22 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="4.8" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function LinkedIn({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.6h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75v6.6h-4v-5.85c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.52-2.3 3.1v5.95h-4v-11Z" />
    </svg>
  );
}

export function XLogo({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.7 3h3.3l-7.2 8.2L22.5 21h-6.6l-5.2-6.4L4.8 21H1.5l7.7-8.8L1.5 3h6.8l4.7 5.9L17.7 3Zm-1.2 16h1.8L7.5 4.8H5.6L16.5 19Z" />
    </svg>
  );
}

export function YouTube({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.6A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.6 8.9.6 8.9.6s7 0 8.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.2ZM9.8 15.4V8.6l6 3.4-6 3.4Z" />
    </svg>
  );
}

export function Instagram({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function TikTok({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 3h-3.2v11.3a2.7 2.7 0 1 1-2.2-2.65V8.4a6 6 0 1 0 5.4 5.95V9.1a7.2 7.2 0 0 0 4.2 1.35V7.2a4.2 4.2 0 0 1-4.2-4.2Z" />
    </svg>
  );
}

export function Mail({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
