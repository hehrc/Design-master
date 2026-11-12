import { img, processSteps } from "../../data/site";
import { Reveal, SectionHead, WatchButton } from "../ui";
import { useVideo } from "../VideoModal";

export function Process() {
  const openVideo = useVideo();
  return (
    <section className="process">
      <div className="container">
        <div className="glow-divider">
          <img src={img.glowLine} alt="" loading="lazy" />
        </div>
        <Reveal>
          <SectionHead title="How it works" subtitle="4 steps we follow in every video we ship." />
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 64 }}>
            <WatchButton onClick={() => openVideo("1195174993", "The Vantora Media process")} />
          </div>
        </Reveal>

        <div className="process-list">
          {processSteps.map((step, i) => (
            <Reveal key={step.no} delay={i * 90}>
              <div className="process-row">
                <div className="process-row__text">
                  <h3 className="process-row__title">
                    {step.title}
                    <span>{step.no}</span>
                  </h3>
                  <p>{step.desc}</p>
                </div>
                <div className="process-row__media">
                  <img src={step.image} alt={`${step.title} illustration`} width={step.width} height={step.height} loading="lazy" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
