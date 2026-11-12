import { Check, Clock, Info } from "../Icons";
import { Button, Marquee, Reveal, SectionHead } from "../ui";
import { img, pricing, pricingReview } from "../../data/site";

export function Pricing() {
  return (
    <section className="pricing" id="Pricing">
      <div className="container">
        <div className="glow-divider">
          <img src={img.glowLine} alt="" loading="lazy" />
        </div>
        <Reveal>
          <SectionHead
            title="Pricing"
            subtitle="Our three Element Framework for top notch product videos"
          />
        </Reveal>

        <div className="pricing-grid">
          {pricing.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120} className="reveal--stretch">
              <article className={`pricing-card ${plan.highlight ? "pricing-card--highlight" : ""}`}>
              <img className="pricing-card__glow-top" src={img.pricingTop} alt="" loading="lazy" />
              <img className="pricing-card__glow-bottom" src={img.pricingBottom} alt="" loading="lazy" />

              <div className="pricing-card__head">
                <h3 className="pricing-card__name">{plan.name}</h3>
                <span className="pricing-card__tag">{plan.tag}</span>
              </div>

              <div>
                <p className="pricing-card__price-label">Starting at</p>
                <div className="pricing-card__prices">
                  {plan.oldPrice ? <span className="price price--old">{plan.oldPrice}</span> : null}
                  <span className="price">{plan.price}</span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {plan.save ? <span className="save-badge">{plan.save}</span> : null}
                <Button href="#talktous" block variant={plan.highlight ? "light" : "dark"}>
                  {plan.cta}
                </Button>
                <div className="slots-row">
                  <img src={plan.badgeTone === "warm" ? img.eye : img.eye2} alt="" loading="lazy" />
                  <strong>{plan.slots}</strong>
                  <span>{plan.slotsLeft}</span>
                </div>
              </div>

              <div className="pricing-divider" />

              <span className={`pricing-badge pricing-badge--${plan.badgeTone}`}>
                <img src={plan.badgeTone === "warm" ? img.fire : img.fire2} alt="" loading="lazy" />
                {plan.badge}
              </span>

              <p className="pricing-card__desc">{plan.desc}</p>

              <div>
                <p className="pricing-card__features-label">Package Includes</p>
                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-meta">
                <div>
                  <p className="pricing-meta__label">Video Duration</p>
                  <p className="pricing-meta__value">
                    <Clock />
                    {plan.duration}
                  </p>
                </div>
                <div>
                  <p className="pricing-meta__label">Timeline</p>
                  <p className="pricing-meta__value">
                    <Info />
                    {plan.timeline}
                  </p>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="pricing-review">
            <Marquee duration={40} gap={16} ariaLabel="Pricing testimonial">
              {[0, 1, 2].map((i) => (
                <article className="proof-card" key={i}>
                  <p className="proof-card__quote">{pricingReview.quote}</p>
                  <div className="proof-card__bottom">
                    <div className="avatar-stack">
                      <img src={img.wade} alt="" loading="lazy" />
                      <img className="is-logo" src={img.castari} alt="" loading="lazy" />
                      <img className="is-logo" src={img.dot} alt="" loading="lazy" />
                    </div>
                    <div className="proof-card__person">
                      <strong>{pricingReview.name}</strong>
                      <span>{pricingReview.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
