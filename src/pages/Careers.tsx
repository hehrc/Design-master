import { useState } from "react";
import { jobs, site } from "../data/site";
import { Button } from "../components/ui";
import { ChevronDown } from "../components/Icons";

export function Careers() {
  const [open, setOpen] = useState<string | null>(jobs[0]?.slug ?? null);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">We're hiring</span>
          <h1>Join the team behind SaaS videos that convert.</h1>
          <p className="page-hero__lede">
            We work with ClickUp and 50+ SaaS companies, from YC startups to enterprises. Browse our open roles below —
            applying takes just a couple of minutes.
          </p>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container">
          <div className="careers-head">
            <h2>Open roles</h2>
            <span className="careers-count">{jobs.length} positions</span>
          </div>

          <div className="jobs">
            {jobs.map((job) => {
              const isOpen = open === job.slug;
              return (
                <div className={`job ${isOpen ? "is-open" : ""}`} key={job.slug}>
                  <button
                    type="button"
                    className="job__head"
                    aria-expanded={isOpen}
                    aria-controls={`job-${job.slug}`}
                    id={`job-toggle-${job.slug}`}
                    onClick={() => setOpen(isOpen ? null : job.slug)}
                  >
                    <span className="job__team">{job.team}</span>
                    <span className="job__title">{job.title}</span>
                    <span className="job__meta">
                      {job.location} · {job.type} · {job.level}
                    </span>
                    <span className="job__chevron" aria-hidden="true">
                      <ChevronDown />
                    </span>
                  </button>

                  <div className="job__body" id={`job-${job.slug}`} role="region" aria-labelledby={`job-toggle-${job.slug}`}>
                    <div className="job__body-inner">
                      <p>{job.about}</p>
                      <h3>What we're looking for</h3>
                      <ul className="job__list">
                        {job.requirements.map((req) => (
                          <li key={req}>{req}</li>
                        ))}
                      </ul>
                      <div className="job__actions">
                        <Button
                          href={`mailto:${site.email}?subject=${encodeURIComponent(`Application — ${job.title}`)}`}
                        >
                          Apply for this role
                        </Button>
                        <span className="job__note">
                          Send a CV and portfolio. We reply to every application.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Don't see your role?</h2>
          <p>We're always interested in great editors, writers and designers. Introduce yourself.</p>
          <Button href={`mailto:${site.email}?subject=${encodeURIComponent("Open application")}`}>
            Send an open application
          </Button>
        </div>
      </section>
    </>
  );
}
