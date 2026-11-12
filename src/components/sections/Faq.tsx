import { useState } from "react";
import { faqs, img } from "../../data/site";
import { Button, Reveal, SectionHead } from "../ui";
import { ChevronDown } from "../Icons";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="container">
        <div className="glow-divider">
          <img src={img.glowLine} alt="" loading="lazy" />
        </div>
        <Reveal>
          <SectionHead title="Frequently Asked Questions" />
        </Reveal>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="faq-item__toggle"
                    aria-expanded={isOpen}
                    aria-controls={`faq-body-${i}`}
                    id={`faq-toggle-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="faq-item__no" aria-hidden="true">
                      <span>[</span>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span>]</span>
                    </span>
                    <span className="faq-item__q">{item.q}</span>
                    <span className="faq-item__chevron" aria-hidden="true">
                      <ChevronDown />
                    </span>
                  </button>
                  <div
                    className="faq-item__body"
                    id={`faq-body-${i}`}
                    role="region"
                    aria-labelledby={`faq-toggle-${i}`}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="faq__cta">
            <p>Still have a question? We answer every email ourselves.</p>
            <Button to="/#talktous">Ask us anything</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
