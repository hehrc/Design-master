import { Link, useLocation } from "react-router-dom";
import { img, site } from "../data/site";
import { SocialLinks } from "./ui";

export function Footer() {
  const location = useLocation();
  const isPersonal = location.pathname.startsWith("/personal-brand");
  const switchTo = isPersonal ? { label: "SaaS Video", to: "/" } : { label: "To Personal Branding", to: "/personal-brand" };

  return (
    <footer className="site-footer">
      <div className="site-footer__bg" aria-hidden="true">
        <img src={img.footerLeft} alt="" loading="lazy" />
        <img src={img.footerRight} alt="" loading="lazy" />
      </div>
      <div className="site-footer__inner container">
        <div className="footer-top">
          <Link to="/" className="footer-logo" aria-label="Vantora Media home">
            <img src={img.logo} alt="Vantora Media" />
          </Link>
          <div className="footer-contact">
            <p>For queries:</p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <SocialLinks />
          </div>
        </div>
        <h2 className="footer-title">Ready When You Are.</h2>
        <div className="footer-bottom">
          <p>
            All Rights Reserved | <strong>Vantora Media {site.year}</strong>
          </p>
          <div className="footer-switch">
            <span>Switch</span>
            <Link to={switchTo.to}>{switchTo.label}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
