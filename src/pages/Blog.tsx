import { Link } from "react-router-dom";
import { blogPosts } from "../data/site";
import { Reveal } from "../components/ui";

export function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">The Vantora Media blog</span>
          <h1>The thinking behind content that just works.</h1>
          <p className="page-hero__lede">
            Practical guides to product demos, founder-led video, and content that helps SaaS buyers understand what
            you do.
          </p>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container">
          <article className="featured-post">
            <Link to={`/blog/${featured.slug}`} className="featured-post__media">
              <img src={featured.image} alt="" />
            </Link>
            <div className="featured-post__body">
              <div className="post-meta">
                <span className="eyebrow">Featured</span>
                <span>{featured.read}</span>
              </div>
              <h2>
                <Link to={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p>{featured.excerpt}</p>
              <div className="post-author">
                <span>{featured.author}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.date}</span>
              </div>
              <Link className="text-link" to={`/blog/${featured.slug}`}>
                Read the article
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--left">
            <h2>All articles</h2>
          </div>
          <div className="post-grid">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 70}>
                <article className="post-card">
                  <Link to={`/blog/${post.slug}`} className="post-card__media">
                    <img src={post.image} alt="" loading="lazy" />
                  </Link>
                  <div className="post-card__body">
                    <div className="post-meta">
                      <span className="eyebrow">{post.category}</span>
                      <span>{post.read}</span>
                    </div>
                    <h3>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <div className="post-author">
                      <span>{post.author}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
