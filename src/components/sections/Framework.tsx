import { useState } from "react";
import { framework, img } from "../../data/site";
import { Reveal, SectionHead, WatchButton } from "../ui";
import { Layers, Presentation, Spark } from "../Icons";
import { useVideo } from "../VideoModal";

const icons = [Spark, Layers, Presentation];

export function Framework() {
  const [open, setOpen] = useState(0);
  const openVideo = useVideo();

  return (
    <section className="framework">
      <div className="container">
        <div className="glow-divider">
          <img src={img.glowLine} alt="" loading="lazy" />
        </div>
        <div className="framework__rocket" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/assets/video/rocket.webm" type="video/webm" />
            <source src="/assets/video/rocket.mp4" type="video/mp4" />
          </video>
        </div>
        <Reveal>
          <SectionHead title="The Vantora Media Framework." subtitle="A simple 3 step framework we follow in every video." />
        </Reveal>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <WatchButton onClick={() => openVideo("1195174993", "The Vantora Media process")} />
          </div>
        </Reveal>

        <div className="framework__layout">
          <div className="framework__list">
            {framework.map((row, i) => {
              const Icon = icons[i];
              const isOpen = open === i;
              return (
                <Reveal key={row.title} delay={i * 90}>
                  <div className={`framework-row ${isOpen ? "is-open" : ""}`}>
                    <button
                      className="framework-row__head"
                      aria-expanded={isOpen}
                      aria-controls={`framework-desc-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="framework-row__icon">
                        <Icon />
                      </span>
                      <span className="framework-row__no">{row.no}</span>
                      <span className="framework-row__title">{row.title}</span>
                    </button>
                    <div className="framework-row__body" id={`framework-desc-${i}`}>
                      <p>{row.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="framework__visual" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/assets/video/sparks.webm" type="video/webm" />
              <source src="/assets/video/sparks.mp4" type="video/mp4" />
            </video>
            <span className="framework__beam" />
          </div>
        </div>
      </div>
    </section>
  );
}
