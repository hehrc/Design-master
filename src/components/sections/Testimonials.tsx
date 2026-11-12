import { img, tweets } from "../../data/site";
import { Button, RatingPill, Reveal, SectionHead } from "../ui";
import { Instagram, LinkedIn, TikTok, XLogo, YouTube } from "../Icons";

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="glow-divider">
          <img src={img.glowLine} alt="" loading="lazy" />
        </div>

        <div className="social-orbit" aria-hidden="true">
          <span className="social-orbit__side">
            <YouTube />
          </span>
          <span className="social-orbit__side">
            <XLogo />
          </span>
          <span className="social-orbit__main">
            <span className="social-orbit__main-glow" />
            <LinkedIn size={42} />
          </span>
          <span className="social-orbit__side">
            <Instagram />
          </span>
          <span className="social-orbit__side">
            <TikTok />
          </span>
        </div>

        <Reveal>
          <SectionHead title="See it all come together." subtitle="Your video coming up next." />
        </Reveal>

        <div className="tweets-grid">
          {tweets.map((tweet, i) => (
            <Reveal key={i} delay={i * 70}>
              <a
                className="tweet-card"
                href={tweet.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${tweet.label}`}
              >
                <img src={tweet.image} alt={tweet.label} width={tweet.width} height={tweet.height} loading="lazy" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="testimonials__footer">
            <RatingPill label="Loved by the absolute bests" />
            <Button href="#talktous">Let's make yours</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
