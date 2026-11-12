import { useState } from "react";
import { img, workTabs } from "../../data/site";
import { Reveal, SectionHead } from "../ui";
import { Layers, Monitor, Play, Presentation, Target } from "../Icons";
import { useVideo } from "../VideoModal";

const icons = [Monitor, Layers, Presentation, Target];

export function Work() {
  const [active, setActive] = useState(0);
  const openVideo = useVideo();
  const tab = workTabs[active];

  return (
    <section className="work" id="Work">
      <div className="container">
        <div className="glow-divider">
          <img src={img.glowLine} alt="" loading="lazy" />
        </div>
        <Reveal>
          <SectionHead title="The videos we ship." subtitle="What are you launching?" />
        </Reveal>

        <Reveal>
          <div className="work-tabs" role="tablist" aria-label="Video categories">
          {workTabs.map((t, i) => {
            const Icon = icons[i];
            return (
              <button
                key={t.name}
                role="tab"
                aria-selected={i === active}
                aria-controls={`work-panel-${i}`}
                id={`work-tab-${i}`}
                className={`work-tab ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="work-tab__icon">
                  <Icon />
                </span>
                <span>{t.name}</span>
              </button>
            );
          })}
          </div>
        </Reveal>

        <div
          className="work-panel"
          role="tabpanel"
          id={`work-panel-${active}`}
          aria-labelledby={`work-tab-${active}`}
          key={active}
        >
          <div className="work-grid">
            {tab.cards.map((card, i) => (
              <button
                type="button"
                className="work-card"
                key={`${card.video}-${card.title}-${i}`}
                style={{ animationDelay: `${i * 45}ms` }}
                onClick={() => openVideo(card.video, `${card.title} — ${tab.name}`)}
              >
                <span className="work-card__media">
                  <img src={card.image} alt={`${card.title} video thumbnail`} loading="lazy" />
                  <span className="work-card__play">
                    <span>
                      <Play />
                    </span>
                  </span>
                </span>
                <span className="work-card__title">{card.title}</span>
                <span className="work-card__desc">{card.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
