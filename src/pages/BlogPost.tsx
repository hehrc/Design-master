import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/site";
import { Button } from "../components/ui";
import { NotFound } from "./NotFound";

export function BlogPost() {
  const { slug } = useParams();
  const index = blogPosts.findIndex((post) => post.slug === slug);

  if (index === -1) return <NotFound />;

  const post = blogPosts[index];
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="article">
        <header className="article__hero container">
          <Link className="back-link" to="/blog">
            ← All articles
          </Link>
          <div className="post-meta">
            <span className="eyebrow">{post.category}</span>
            <span>{post.read}</span>
          </div>
          <h1>{post.title}</h1>
          <div className="post-author">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.date}</span>
          </div>
          <div className="article__image">
            <img src={post.image} alt="" />
          </div>
        </header>

        <div className="article__body container">
          {post.body.map((block, i) => (
            <section key={i} className="article__block">
              {block.heading ? <h2>{block.heading}</h2> : null}
              {block.paragraphs.map((paragraph, p) => (
                <p key={p}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="article__cta">
            <h2>Need a video that does this for you?</h2>
            <p>We ship product videos for SaaS teams in about two weeks.</p>
            <Button to="/#talktous">Get your product video</Button>
          </div>
        </div>
      </article>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--left">
            <h2>Keep reading</h2>
          </div>
          <div className="post-grid post-grid--two">
            {related.map((item) => (
              <article className="post-card post-card--horizontal" key={item.slug}>
                <Link to={`/blog/${item.slug}`} className="post-card__media">
                  <img src={item.image} alt="" loading="lazy" />
                </Link>
                <div className="post-card__body">
                  <div className="post-meta">
                    <span className="eyebrow">{item.category}</span>
                    <span>{item.read}</span>
                  </div>
                  <h3>
                    <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
