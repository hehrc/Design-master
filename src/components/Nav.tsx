import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui";
import { Close, Menu } from "./Icons";
import { img, site } from "../data/site";

const links = [
  { label: "Work", to: "/#Work" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Reviews", to: "/#Review" },
  { label: "Pricing", to: "/#Pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
  { label: "Personal Branding", to: "/personal-brand" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("modal-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (to: string) => {
    if (to.startsWith("/#")) return false;
    return location.pathname === to || (to !== "/" && location.pathname.startsWith(`${to}/`));
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header__inner">
          <Link to="/" className="brand" aria-label="Vantora Media home">
            <img src={img.logo} alt="Vantora Media" />
          </Link>
          <nav className="nav" aria-label="Main">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`nav__link ${isActive(link.to) ? "is-active" : ""} ${
                  link.label === "Pricing" ? "nav__link--pricing" : ""
                }`}
              >
                {link.label}
                {link.label === "Pricing" ? <img className="nav__dot" src={img.hoverDot} alt="" /> : null}
              </Link>
            ))}
          </nav>
          <div className="nav__cta">
            <Button to="/#talktous" size="sm" ariaLabel="Let's talk about your video">
              Let's Talk!
            </Button>
          </div>
          <button
            className="nav__toggle"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="mobile-menu__top">
          <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Vantora Media home">
            <img src={img.logo} alt="Vantora Media" />
          </Link>
          <button className="nav__toggle" style={{ display: "inline-flex" }} onClick={() => setOpen(false)} aria-label="Close menu">
            <Close />
          </button>
        </div>
        <nav className="mobile-menu__links" aria-label="Mobile">
          {links.map((link) => (
            <Link key={link.label} to={link.to} className="mobile-menu__link" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__cta">
          <Button to="/#talktous" onClick={() => setOpen(false)}>
            Let's Talk!
          </Button>
        </div>
        <div className="mobile-menu__footer">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>© Vantora Media {site.year}</span>
        </div>
      </div>
    </>
  );
}
