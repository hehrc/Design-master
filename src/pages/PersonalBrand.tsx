import { useState } from "react";
import { heroBrandLogos, img, pbStats, showcase, site, trustedLogos } from "../data/site";
import { Button, Marquee, Reveal, SectionHead, WatchButton } from "../components/ui";
import { Check, ChevronDown, Play, Spark } from "../components/Icons";
import { useVideo } from "../components/VideoModal";
import { Contact } from "../components/sections/Contact";

const loveQuotes = [
  { quote: "Absolutely loved it!", name: "Jonh Micheal", role: "@Youtube · 1.1M Subscribers" },
  { quote: "Banger videos they do!", name: "Micheal Jordan", role: "@Youtube · 1.1M Subscribers" },
  { quote: "10/10 motions stuffs!", name: "Alex Becker", role: "@Instagram · 200k Followers" },
];

const formats = [
  {
    name: "Youtube videos",
    desc: "Long-form edits built around retention: cold open, tight pacing, and a payoff that earns the subscribe.",
  },
  {
    name: "Shorts",
    desc: "Vertical cutdowns from the same shoot, framed for the first second and captioned for sound-off feeds.",
  },
  {
    name: "SaaS Videos",
    desc: "Product films and launch videos for the companies you build in public.",
  },
  {
    name: "Ad Creatives / VSL",
    desc: "Direct-response edits with hook variants, so you can test the first three seconds, not the whole video.",
  },
  {
    name: "Audience Research",
    desc: "We research your audience before anything else, so the content answers questions they already have.",
  },
  {
    name: "Content Calendar",
    desc: "A repeatable publishing plan with formats, deadlines and review checkpoints you can actually keep.",
  },
  {
    name: "Growth Automation",
    desc: "Repurposing workflows that turn one shoot into a month of posts across every platform.",
  },
  {
    name: "Ready for 10X Growth",
    desc: "A quarterly partnership for creators who want a full production team without hiring one.",
  },
];

const creatorProcess = [
  { no: "01", title: "Idea Analysis", desc: "We look at your last 30 videos and find the formats your audience already rewards." },
  { no: "02", title: "Writing Content", desc: "Hooks, outlines and scripts, written for your voice rather than a generic creator template." },
  { no: "03", title: "Editing the Video", desc: "Pacing, motion graphics, sound design and captions — all in-house." },
  { no: "04", title: "Creating thumbnail", desc: "Thumbnail concepts and A/B variants built before the video publishes, not after." },
];

const creatorFaqs = [
  {
    q: "What types of videos do you create?",
    a: "Launch films, product demos, explainers, VSLs, short-form content and podcast edits — everything a SaaS brand or personal brand needs to grow.",
  },
  {
    q: "Do you work with early-stage creators or only big channels?",
    a: "Both. We work with creators from their first 10k subscribers through channels well past a million.",
  },
  {
    q: "How long does a video take?",
    a: "Shorts typically ship in days. Long-form edits and launch films take 2 to 4 weeks depending on scope.",
  },
  {
    q: "Who owns the files?",
    a: "You do. Every source file, export and thumbnail variant is delivered to you on completion.",
  },
  {
    q: "Can you match my editing style?",
    a: "Yes. We start from your existing channel and keep what works, then tighten pacing, sound and graphics where it helps retention.",
  },
];

const creatorPricing = [
  {
    name: "One off video",
    tag: "Chosen by pre-seed creators",
    price: "$5,499",
    slots: "06/10",
    desc: "A single flagship video, from strategy through final delivery.",
    features: [
      "Strategy-led scripting",
      "Custom motion design",
      "Built for retention and conversion",
      "Clear timeline and predictable delivery",
    ],
  },
  {
    name: "Creator growth pack",
    tag: "20% discounted",
    price: "$15,499",
    slots: "05/10",
    desc: "Four videos a month plus thumbnails, cutdowns and a publishing calendar.",
    features: [
      "4 long-form edits per month",
      "Shorts and cutdowns included",
      "Thumbnail concepts and A/B variants",
      "Monthly audience research review",
    ],
  },
];

export function PersonalBrand() {
  const openVideo = useVideo();
  const [format, setFormat] = useState(0);
  const [faq, setFaq] = useState<number | null>(0);
  const activeFormat = formats[format];

  return (
    <>
      <section className="pb-hero">
        <div className="container">
          <a className="pb-hero__pill" href="#pb-work">
            50+ top creators served <span aria-hidden="true">↗</span>
          </a>
          <h1>
            Be the next top
            <br />
            creator on youtube
          </h1>
          <p className="pb-hero__lede">Your largest growth starts with Vantora Media.</p>
          <div className="pb-hero__actions">
            <Button href="#talktous">Book a quick call</Button>
            <WatchButton onClick={() => openVideo("1195181431", "How Vantora Media works")} label="Watch how we do · 2 mins" />
          </div>

        </div>

        <div className="pb-strip" id="pb-work" aria-hidden="true">
          <div className="pb-strip__track">
            <img src="/assets/img/pb-hero-strip.webp" alt="" width={1496} height={272} loading="eager" />
            <img src="/assets/img/pb-hero-strip.webp" alt="" width={1496} height={272} loading="eager" />
          </div>
        </div>

        <div className="container">
          <div className="pb-stats">
            {pbStats.map((stat) => (
              <div className="pb-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Built for your growth" subtitle="With the system you always wanted." />
          <div className="pb-love">
            {loveQuotes.map((item, i) => (
              <Reveal key={item.name} delay={i * 70}>
                <div className="pb-love__card">
                  <img src={img.stars} alt="5 stars" />
                  <p>“{item.quote}”</p>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pb-marquee-label">Ultra big creators we worked with</div>
        </div>
        <Marquee duration={38} gap={64} fade ariaLabel="Creators we worked with">
          {[...heroBrandLogos, ...trustedLogos].map((src, i) => (
            <img className="pb-logo" key={i} src={src} alt="" loading="lazy" />
          ))}
        </Marquee>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Latest greatest videos" subtitle="Frames from recent creator edits." />
        </div>
        <div className="showcase__marquee">
          <Marquee duration={55} gap={12} ariaLabel="Latest creator videos">
            {showcase.map((item, i) => (
              <article className="showcase-card" key={`latest-${item.image}-${i}`}>
                <button
                  type="button"
                  className="showcase-card__media"
                  onClick={() => openVideo(item.video, "Creator video")}
                  aria-label="Play creator video"
                >
                  <img src={item.image} alt="" loading="eager" />
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

      <section className="section">
        <div className="container">
          <SectionHead title="One system, every format" subtitle="We slot into the format your audience already watches." />
          <div className="pb-formats">
            <div className="pb-formats__tabs" role="tablist" aria-label="Content formats">
              {formats.map((item, i) => (
                <button
                  key={item.name}
                  role="tab"
                  aria-selected={format === i}
                  aria-controls="pb-format-panel"
                  className={`pb-format ${format === i ? "is-active" : ""}`}
                  onClick={() => setFormat(i)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="pb-formats__panel" id="pb-format-panel" role="tabpanel">
              <Spark size={24} />
              <h3>{activeFormat.name}</h3>
              <p>{activeFormat.desc}</p>
              <Button href="#talktous" size="sm">
                Start with this format
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Creators just love us" subtitle="Real notes from channels we edit for." />
          <div className="pb-love pb-love--wide">
            {[
              ...loveQuotes,
              { quote: "We went from inconsistent to posting every single week.", name: "Jonh Micheal", role: "@Youtube · 1.1M Subscribers" },
              { quote: "The edits finally match the ideas in my head.", name: "Micheal Jordan", role: "@Youtube · 1.1M Subscribers" },
              { quote: "Our retention graph has never looked better.", name: "Alex Becker", role: "@Instagram · 200k Followers" },
            ].map((item, i) => (
              <Reveal key={`${item.name}-${i}`} delay={(i % 3) * 70}>
                <div className="pb-love__card">
                  <img src={img.stars} alt="5 stars" />
                  <p>“{item.quote}”</p>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="The massive creator growth is here" subtitle="A simple four step process we run for every channel." />
          <div className="pb-process">
            {creatorProcess.map((step) => (
              <div className="pb-process__step" key={step.no}>
                <span>{step.no}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pb-pricing">
        <div className="container">
          <SectionHead title="Pricing" subtitle="Simple packages for creators who publish every week." />
          <div className="pricing-grid">
            {creatorPricing.map((plan, i) => (
              <article className={`pricing-card ${i === 1 ? "pricing-card--highlight" : ""}`} key={plan.name}>
                <img className="pricing-card__glow-top" src={img.pricingTop} alt="" loading="lazy" />
                <img className="pricing-card__glow-bottom" src={img.pricingBottom} alt="" loading="lazy" />
                <div className="pricing-card__head">
                  <h3 className="pricing-card__name">{plan.name}</h3>
                  <span className="pricing-card__tag">{plan.tag}</span>
                </div>
                <div>
                  <p className="pricing-card__price-label">Starting at</p>
                  <div className="pricing-card__prices">
                    <span className="price">{plan.price}</span>
                  </div>
                </div>
                <Button href="#talktous" block variant={i === 1 ? "light" : "dark"}>
                  Book a call
                </Button>
                <div className="slots-row">
                  <img src={i === 1 ? img.eye2 : img.eye} alt="" loading="lazy" />
                  <strong>{plan.slots}</strong>
                  <span>Slots left this month</span>
                </div>
                <div className="pricing-divider" />
                <p className="pricing-card__desc">{plan.desc}</p>
                <div>
                  <p className="pricing-card__features-label">Package includes</p>
                  <ul className="pricing-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Frequently asked questions" />
          <div className="faq-list">
            {creatorFaqs.map((item, i) => {
              const isOpen = faq === i;
              return (
                <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.q}>
                  <button
                    type="button"
                    className="faq-item__toggle"
                    aria-expanded={isOpen}
                    aria-controls={`pb-faq-${i}`}
                    onClick={() => setFaq(isOpen ? null : i)}
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
                  <div className="faq-item__body" id={`pb-faq-${i}`} role="region">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />

      <section className="cta-band">
        <div className="container">
          <h2>Ready to ride?</h2>
          <p>Tell us about your channel and we'll show you what the next month could look like.</p>
          <Button href={`mailto:${site.email}?subject=${encodeURIComponent("Creator video enquiry")}`}>
            Email the team
          </Button>
        </div>
      </section>
    </>
  );
}
