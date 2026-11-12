import { Link } from "react-router-dom";
import { Button } from "../components/ui";

export function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="not-found__code">404</span>
        <h1>This page didn't make the final cut.</h1>
        <p>The link may be old, or the page may have moved. The good stuff is still one click away.</p>
        <div className="not-found__actions">
          <Button to="/">Back to home</Button>
          <Link className="text-link" to="/case-studies">
            See the case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
