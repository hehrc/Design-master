import { img, reviews } from "../../data/site";
import { Reveal, SectionHead } from "../ui";

export function Reviews() {
  return (
    <section className="reviews" id="Review">
      <div className="container">
        <div className="glow-divider">
          <img src={img.glowLine} alt="" loading="lazy" />
        </div>
        <SectionHead title="Don't take our word for it." subtitle="What founders say after the video ships." />

        <div className="review-grid">
          {reviews.map((review, i) => (
            <Reveal key={review.name + i} delay={(i % 3) * 70}>
              <article className="review-card">
                <p className="review-card__quote">{review.quote}</p>
                <div className="review-card__person">
                  <div className="avatar-stack">
                    <img src={review.avatar} alt="" loading="lazy" />
                    <img className="is-logo" src={review.logo} alt="" loading="lazy" />
                  </div>
                  <div>
                    <p className="review-card__name">{review.name}</p>
                    <p className="review-card__role">{review.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
