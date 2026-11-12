import { Link, useParams } from "react-router-dom";
import { caseStudies, img } from "../data/site";
import { Button, Reveal } from "../components/ui";
import { Play } from "../components/Icons";
import { useVideo } from "../components/VideoModal";
import { NotFound } from "./NotFound";

export function CaseStudyDetail() {
  const { slug } = useParams();
  const openVideo = useVideo();
  const index = caseStudies.findIndex((study) => study.slug === slug);

  if (index === -1) return <NotFound />;

  const study = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <section className="page-hero page-hero--detail">
        <div className="container">
          <Link className="back-link" to="/case-studies">
            ← All case studies
          </Link>
          <div className="page-hero__meta">
            <span className="eyebrow">{study.category}</span>
            <span className="page-hero__dot" aria-hidden="true" />
            <span>{study.client}</span>
          </div>
          <h1>{study.title}</h1>
          <p className="page-hero__lede">{study.blurb}</p>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container">
          <button
            type="button"
            className="study-video"
            onClick={() => openVideo(study.video, study.title)}
            aria-label={`Play ${study.title}`}
          >
            <img src={study.image} alt={`${study.client} video still`} />
            <span className="featured-study__play">
              <span className="play-circle">
                <Play />
              </span>
            </span>
          </button>

          <div className="study-stats">
            {study.stats.map((stat) => (
              <div className="study-stat" key={stat.label}>
                <span className="study-stat__value">{stat.value}</span>
                <span className="study-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="study-body">
            <Reveal>
              <div className="study-section">
                <span className="eyebrow">The challenge</span>
                <p>{study.challenge}</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="study-section">
                <span className="eyebrow">The approach</span>
                <p>{study.approach}</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="study-section">
                <span className="eyebrow">The result</span>
                <p>{study.result}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link to={`/case-studies/${next.slug}`} className="next-study">
            <span className="eyebrow">Next case study</span>
            <h2>{next.title}</h2>
            <span className="next-study__arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="glow-divider">
            <img src={img.glowLine} alt="" loading="lazy" />
          </div>
          <h2>Want this for your launch?</h2>
          <p>Tell us what you're shipping and we'll tell you what the video should say.</p>
          <Button to="/#talktous">Start your project</Button>
        </div>
      </section>
    </>
  );
}
