import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Play } from "./Icons";
import { img, ratingAvatars } from "../data/site";

/* -------------------------------------------------------------------------- */
/*  Button                                                                    */
/* -------------------------------------------------------------------------- */

type ButtonProps = {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: "light" | "dark";
  size?: "md" | "sm";
  block?: boolean;
  type?: "button" | "submit";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  to,
  onClick,
  variant = "light",
  size = "md",
  block,
  type = "button",
  className = "",
  external,
  ariaLabel,
  disabled,
}: ButtonProps) {
  const cls = [
    "btn",
    variant === "dark" ? "btn--dark" : "",
    size === "sm" ? "btn--sm" : "",
    block ? "btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span className="btn__label">{children}</span>
      <span className="btn__arrow" aria-hidden="true">
        <span className="btn__arrow-stack">
          <ArrowUpRight />
          <ArrowUpRight />
        </span>
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
      {inner}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Marquee                                                                   */
/* -------------------------------------------------------------------------- */

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
  gap?: number;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function Marquee({ children, duration = 42, gap = 24, reverse, fade, className = "", ariaLabel }: MarqueeProps) {
  return (
    <div
      className={`marquee ${fade ? "marquee--fade" : ""} ${className}`}
      style={{ "--marquee-duration": `${duration}s`, "--marquee-gap": `${gap}px` } as React.CSSProperties}
      aria-label={ariaLabel}
      data-reverse={reverse ? "true" : undefined}
    >
      <div className="marquee__track">
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reveal on scroll                                                          */
/* -------------------------------------------------------------------------- */

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
};

export function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section heading                                                           */
/* -------------------------------------------------------------------------- */

export function SectionHead({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Rating pill                                                               */
/* -------------------------------------------------------------------------- */

export function RatingPill({
  label = "50+ founder reviews",
  href = "#Review",
  value = "4.9",
}: {
  label?: string;
  href?: string;
  value?: string;
}) {
  const content = (
    <>
      <span className="rating-pill__avatars" aria-hidden="true">
        {ratingAvatars.slice(0, 4).map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" />
        ))}
      </span>
      <img className="rating-stars" src={img.stars} alt="5 star rating" />
      <strong>{value}</strong>
      <span className="rating-pill__label">{label}</span>
      <span className="rating-pill__arrow">
        <ChevronRight size={7} />
      </span>
    </>
  );
  return (
    <a className="rating-pill" href={href} aria-label={`${value} rated, ${label}`}>
      {content}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Watch process button                                                      */
/* -------------------------------------------------------------------------- */

export function WatchButton({ onClick, label = "Watch Process In detail" }: { onClick: () => void; label?: string }) {
  return (
    <button className="watch-button" onClick={onClick} type="button">
      <span className="watch-button__thumb">
        <img src={img.watchThumb} alt="" loading="lazy" />
        <span>
          <Play />
        </span>
      </span>
      <span className="watch-button__label">
        <span className="dot" aria-hidden="true" />
        {label}
        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true">
          <path d="M21 6H2M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="square" />
        </svg>
      </span>
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Social icons                                                              */
/* -------------------------------------------------------------------------- */

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`footer-socials ${className}`}>
      <a href="https://www.linkedin.com/company/vantoramedia" target="_blank" rel="noopener noreferrer" aria-label="Vantora Media on LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.6h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75v6.6h-4v-5.85c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.52-2.3 3.1v5.95h-4v-11Z" />
        </svg>
      </a>
      <a href="https://x.com/vantoramedia" target="_blank" rel="noopener noreferrer" aria-label="Vantora Media on X">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.7 3h3.3l-7.2 8.2L22.5 21h-6.6l-5.2-6.4L4.8 21H1.5l7.7-8.8L1.5 3h6.8l4.7 5.9L17.7 3Zm-1.2 16h1.8L7.5 4.8H5.6L16.5 19Z" />
        </svg>
      </a>
      <a href="https://www.youtube.com/@vantoramedia" target="_blank" rel="noopener noreferrer" aria-label="Vantora Media on YouTube">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.6A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.6 8.9.6 8.9.6s7 0 8.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.2ZM9.8 15.4V8.6l6 3.4-6 3.4Z" />
        </svg>
      </a>
    </div>
  );
}
