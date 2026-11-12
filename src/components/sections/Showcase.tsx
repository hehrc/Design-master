import { img, showcase, trustedLogos, ycLogo } from "../../data/site";
import { Marquee, Reveal, SectionHead } from "../ui";
import { ChevronRight, Play } from "../Icons";
import { useVideo } from "../VideoModal";

export function Showcase() {
  const openVideo = useVideo();
  return (
    <section className="showcase">
      <div className="container">
        <div className="glow-divider">
          <img src={img.glowLine} alt="" loading="lazy" />
        </div>
        <Reveal>
          <SectionHead title="More Recent Work." subtitle="Built for 50+ YC Companies. Most ship in under 2 weeks." />
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
            <a className="trusted-pill" href="/case-studies" style={{ padding: "8px 12px" }}>
              <span>Trusted by</span>
              <span className="trusted-logos" aria-hidden="true">
                {trustedLogos.slice(0, 3).map((src, i) => (
                  <img key={i} src={src} alt="" loading="lazy" />
                ))}
                <img className="trusted-yc" src={ycLogo} alt="" loading="lazy" />
              </span>
              <span className="trusted-pill__arrow">
                <ChevronRight />
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="showcase__marquee">
          <Marquee duration={60} gap={12} ariaLabel="Recent client work">
          {showcase.map((item, i) => (
            <article className="showcase-card" key={`${item.image}-${i}`}>
              <button
                type="button"
                className="showcase-card__media"
                onClick={() => openVideo(item.video, "Recent client work")}
                aria-label="Play client video"
              >
                <img src={item.image} alt="Client video thumbnail" loading="eager" />
                <span className="showcase-card__play">
                  <span>
                    <Play />
                  </span>
                </span>
              </button>
              <div className="showcase-card__foot">
                <span>Made For</span>
                <img src={item.logo} alt="Client logo" loading="eager" />
              </div>
            </article>
          ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
