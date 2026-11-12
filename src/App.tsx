import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { VideoProvider } from "./components/VideoModal";
import { Home } from "./pages/Home";
import { CaseStudies } from "./pages/CaseStudies";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Careers } from "./pages/Careers";
import { PersonalBrand } from "./pages/PersonalBrand";
import { NotFound } from "./pages/NotFound";
import { blogPosts, caseStudies } from "./data/site";

function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = "SaaS Videos That Convert | Vantora Media";
    if (pathname === "/case-studies") {
      title = "Our Work — SaaS Video Case Studies | Vantora Media";
    } else if (pathname.startsWith("/case-studies/")) {
      const study = caseStudies.find((item) => item.slug === pathname.split("/")[2]);
      title = study ? `${study.title} — Case Study | Vantora Media` : "Case Study | Vantora Media";
    } else if (pathname === "/blog") {
      title = "The Vantora Media Blog — SaaS Video Insights";
    } else if (pathname.startsWith("/blog/")) {
      const post = blogPosts.find((item) => item.slug === pathname.split("/")[2]);
      title = post ? `${post.title} | Vantora Media` : "Article | Vantora Media";
    } else if (pathname === "/careers") {
      title = "Careers — Join Vantora Media";
    } else if (pathname === "/personal-brand") {
      title = "Personal Brand — Vantora Media";
    } else if (pathname !== "/") {
      title = "Page Not Found | Vantora Media";
    }
    document.title = title;
  }, [pathname]);

  return null;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Wait for the target page to mount before scrolling.
      const frame = window.requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 96;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
      return () => window.cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <VideoProvider>
        <ScrollManager />
        <DocumentTitle />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/personal-brand" element={<PersonalBrand />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </VideoProvider>
    </BrowserRouter>
  );
}
