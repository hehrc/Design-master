import { steps } from "../../data/site";
import { Reveal, SectionHead } from "../ui";

export function Steps() {
  return (
    <section className="steps section--tight-top">
      <div className="container">
        <SectionHead title="What goes into every video" subtitle="Three things we bring in every video." />
        <div className="step-grid">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <article className="step-card">
                <div className="step-card__media">
                  <video autoPlay muted loop playsInline preload="metadata" aria-label={`${step.title} example animation`}>
                    <source src={step.webm} type="video/webm" />
                    <source src={step.video} type="video/mp4" />
                  </video>
                </div>
                <div className="step-card__body">
                  <h5>{step.title}</h5>
                  <p>{step.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
