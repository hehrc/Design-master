import { Link } from "react-router-dom";
import { caseStudies, img, showcase } from "../data/site";
import { Button, Marquee, Reveal } from "../components/ui";
import { Play } from "../components/Icons";
import { useVideo } from "../components/VideoModal";

export function CaseStudies() {
  const openVideo = useVideo();
  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Selected work</span>
          <h1>SaaS product videos that do the talking.</h1>
          <p className="page-hero__lede">
            A look at the SaaS product videos and launch films we have made for over 50 companies, from YC startups
            to enterprises.
          </p>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container">
          <article className="featured-study">
            <button
              type="button"
              className="featured-study__media"
              onClick={() => openVideo(featured.video, featured.title)}
              aria-label={`Play ${featured.title}`}
            >
              <img src={featured.image} alt={`${featured.client} launch film still`} />
              <span className="featured-study__play">
                <span className="play-circle">
                  <Play />
                </span>
              </span>
              <span className="featured-study__tag">Featured · {featured.category}</span>
            </button>
            <div className="featured-study__body">
              <div className="featured-study__client">
                {featured.logo ? <img src={featured.logo} alt={`${featured.client} logo`} /> : null}
                <span>{featured.client}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.blurb}</p>
              <Button to={`/case-studies/${featured.slug}`}>Read the case study</Button>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--left">
            <h2>More case studies</h2>
            <p>Different formats, same brief: make the product obvious in under a minute.</p>
          </div>
          <div className="study-grid">
            {rest.map((study, i) => (
              <Reveal key={study.slug} delay={(i % 3) * 70}>
                <article className="study-card">
                  <Link to={`/case-studies/${study.slug}`} className="study-card__media" aria-label={`Read ${study.title}`}>
                    <img src={study.image} alt={`${study.client} video still`} loading="lazy" />
                    <span className="study-card__tag">{study.category}</span>
                  </Link>
                  <div className="study-card__body">
                    <div className="study-card__client">
                      {study.logo ? <img src={study.logo} alt="" loading="lazy" /> : null}
                      <span>{study.client}</span>
                    </div>
                    <h3>
                      <Link to={`/case-studies/${study.slug}`}>{study.title}</Link>
                    </h3>
                    <p>{study.blurb}</p>
                    <Link className="study-card__link" to={`/case-studies/${study.slug}`}>
                      View case study →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Recent work</h2>
            <p>Frames from the last few months.</p>
          </div>
        </div>
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
                  <img src={item.image} alt="Client video thumbnail" loading="lazy" />
                  <span className="showcase-card__play">
                    <span>
                      <Play />
                    </span>
                  </span>
                </button>
              </article>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="glow-divider">
            <img src={img.glowLine} alt="" loading="lazy" />
          </div>
          <h2>Want a SaaS product video that converts?</h2>
          <p>We build SaaS product videos for companies from YC startups to enterprises, delivered in about two weeks.</p>
          <Button to="/#talktous">Get your product video</Button>
        </div>
      </section>
    </>
  );
}
