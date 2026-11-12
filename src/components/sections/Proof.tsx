import { useEffect, useRef, useState } from "react";
import { img, proofMarquee, proofSlider } from "../../data/site";
import { Marquee, RatingPill, Reveal } from "../ui";

export function Proof() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = [...proofSlider, ...proofSlider];
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % proofSlider.length);
    }, 4000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section className="proof">
      <div className="container">
        <div className="glow-divider">
          <img src={img.glowLine} alt="" loading="lazy" />
        </div>

        <Reveal>
          <div
            className="proof__slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Founder quotes"
        >
          <div className="proof__track" style={{ transform: `translateX(calc(-1 * var(--proof-step, 304px) * ${index}))` }}>
            {slides.map((card, i) => (
              <article className="proof-card" key={i} aria-hidden={i < index || i >= index + 3}>
                <p className="proof-card__quote">
                  {card.highlight && card.quote.includes(card.highlight) ? (
                    <>
                      {card.quote.split(card.highlight)[0]}
                      <strong>{card.highlight}</strong>
                      {card.quote.split(card.highlight).slice(1).join(card.highlight)}
                    </>
                  ) : (
                    card.quote
                  )}
                </p>
                <div className="proof-card__bottom">
                  <div className="avatar-stack">
                    <img src={card.avatar} alt="" loading="lazy" />
                    <img className="is-logo" src={card.logo} alt="" loading="lazy" />
                  </div>
                  <div className="proof-card__person">
                    <strong>{card.name}</strong>
                    <span>{card.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        </Reveal>

        <Reveal>
          <div className="proof-dots" role="tablist" aria-label="Choose a quote">
          {proofSlider.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Quote ${i + 1}`}
              className={i === index ? "is-active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        </Reveal>

        <Reveal>
          <div className="proof-marquee">
          <Marquee duration={46} gap={16} fade ariaLabel="More founder quotes">
            {proofMarquee.map((card, i) => (
              <article className="proof-card" key={i}>
                <p className="proof-card__quote">{card.quote}</p>
                <div className="proof-card__bottom">
                  <div className="avatar-stack">
                    <img src={card.avatar} alt="" loading="eager" />
                    <img className="is-logo" src={card.logo} alt="" loading="eager" />
                  </div>
                  <div className="proof-card__person">
                    <strong>{card.name}</strong>
                    <span>{card.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </Marquee>
        </div>

        </Reveal>

        <Reveal>
          <div className="proof__rating">
            <RatingPill />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
