import { useState, type FormEvent } from "react";
import { Button, Reveal, SectionHead } from "../ui";
import { site } from "../../data/site";

type Fields = {
  name: string;
  email: string;
  company: string;
  website: string;
  budget: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  name: "",
  email: "",
  company: "",
  website: "",
  budget: "",
  message: "",
};

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "We need an email to reply to.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "That email doesn't look right.";
  if (!values.company.trim()) errors.company = "What company are you with?";
  if (!values.message.trim()) errors.message = "Tell us a little about the video you need.";
  else if (values.message.trim().length < 20) errors.message = "A sentence or two helps us scope it.";
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const mailtoFallback = (payload: Fields) => {
    const subject = encodeURIComponent(`Product video enquiry — ${payload.company || payload.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company}`,
        payload.website ? `Website: ${payload.website}` : "",
        payload.budget ? `Budget: ${payload.budget}` : "",
        "",
        payload.message,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields and try again.");
      return;
    }

    if (!ENDPOINT) {
      mailtoFallback(values);
      setStatus("success");
      setStatusMessage(
        `No form endpoint is configured, so we've opened your email app with the details filled in. Send it to ${site.email} and we'll reply within one business day.`,
      );
      return;
    }

    setStatus("sending");
    setStatusMessage("");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      setStatus("success");
      setStatusMessage("Thanks — your brief is in. We'll reply within one business day.");
      setValues(EMPTY);
    } catch {
      setStatus("error");
      setStatusMessage(
        `Something went wrong sending the form. You can email us directly at ${site.email} and we'll pick it up there.`,
      );
    }
  };

  return (
    <section className="contact" id="talktous">
      <div className="container">
        <Reveal>
          <SectionHead title="let's build yours" subtitle="Answer a few quick questions and we'll lock you in." />
        </Reveal>

        <Reveal>
          <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="contact-form__inner">
            <div className="contact-form__grid">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name ? <span className="field__error" id="name-error">{errors.name}</span> : null}
              </div>

              <div className="field">
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email ? <span className="field__error" id="email-error">{errors.email}</span> : null}
              </div>

              <div className="field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={values.company}
                  onChange={update("company")}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "company-error" : undefined}
                />
                {errors.company ? <span className="field__error" id="company-error">{errors.company}</span> : null}
              </div>

              <div className="field">
                <label htmlFor="website">Website (optional)</label>
                <input
                  id="website"
                  name="website"
                  inputMode="url"
                  placeholder="https://"
                  value={values.website}
                  onChange={update("website")}
                />
              </div>

              <div className="field field--full">
                <label htmlFor="budget">Budget (optional)</label>
                <select id="budget" name="budget" value={values.budget} onChange={update("budget")}>
                  <option value="">Select a range</option>
                  <option value="one-off">One-off video — $3,999</option>
                  <option value="bundle">3-video bundle — $9,995</option>
                  <option value="custom">Custom / retainer</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div className="field field--full">
                <label htmlFor="message">What are you launching?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message ? <span className="field__error" id="message-error">{errors.message}</span> : null}
              </div>
            </div>

            <div className="contact-form__actions">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Get your product video"}
              </Button>
              <p className="contact-form__note">
                No spam, no drip sequence. A human reads every enquiry — usually within one business day.
              </p>
            </div>

            {status !== "idle" && statusMessage ? (
              <p
                className={`form-status ${status === "error" ? "is-error" : ""} ${status === "success" ? "is-success" : ""}`}
                role="status"
                aria-live="polite"
              >
                {statusMessage}
              </p>
            ) : null}
          </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
