import { Link } from "react-router-dom";
import { img, trustedLogos, creatorLogos, heroBrandLogos, ycLogo } from "../../data/site";
import { Button, Marquee } from "../ui";
import { ChevronRight, Play } from "../Icons";
import { useVideo } from "../VideoModal";

export function Hero() {
  const openVideo = useVideo();

  return (
    <section className="hero">
      <img className="hero__glow hero__glow--left" src={img.heroLeft} alt="" aria-hidden="true" />
      <img className="hero__glow hero__glow--right" src={img.heroRight} alt="" aria-hidden="true" />
      <div className="container">
        <div className="hero__content">
          <div className="trusted-row">
            <Link to="/case-studies" className="trusted-pill trusted-pill--highlight">
              <span>Trusted by</span>
              <span className="trusted-logos" aria-hidden="true">
                {trustedLogos.map((src, i) => (
                  <img key={i} src={src} alt="" loading="eager" />
                ))}
              </span>
              <span className="trusted-pill__arrow">
                <ChevronRight />
              </span>
            </Link>
            <Link to="/case-studies" className="trusted-pill trusted-pill--served">
              <span>Served 50+</span>
              <img src={ycLogo} alt="Y Combinator" className="trusted-yc" style={{ width: 24, height: 24, borderRadius: 50, background: "#fff", padding: 3 }} loading="eager" />
              <span>YC Companies</span>
              <span className="trusted-pill__arrow">
                <ChevronRight />
              </span>
            </Link>
            <Link to="/case-studies" className="trusted-pill trusted-pill--creator">
              <span>Creator of</span>
              <span className="trusted-logos" aria-hidden="true">
                {creatorLogos.map((src, i) => (
                  <img key={i} src={src} alt="" loading="eager" />
                ))}
              </span>
              <span>Videos</span>
              <span className="trusted-pill__arrow">
                <ChevronRight />
              </span>
            </Link>
          </div>

          <div className="hero__title">
            <h1>Product videos that just work</h1>
          </div>

          <div className="hero__cta">
            <Button href="#talktous">Get your Product Video</Button>
          </div>

          <div className="hero__brands">
            <Marquee duration={30} gap={48} ariaLabel="Client logos">
              {heroBrandLogos.map((src, i) => (
                <img key={i} src={src} alt="" loading="eager" />
              ))}
            </Marquee>
          </div>

          <div className="hero-card">
            <button
              type="button"
              className="hero-card__media"
              onClick={() => openVideo("1195181431", "Vantora Media showreel")}
              aria-label="Play the Vantora Media showreel"
            >
              <img src={img.heroVideoPoster} alt="Vantora Media showreel preview" fetchPriority="high" />
              <span className="hero-card__play">
                <span className="play-circle">
                  <Play />
                </span>
              </span>
            </button>
            <a href="#talktous" className="hero-card__link">
              Get Yours Next
              <img src={img.arrowUpRight} alt="" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
