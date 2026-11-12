import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Close } from "./Icons";

type OpenVideo = (vimeoId: string, title?: string) => void;

const VideoContext = createContext<OpenVideo>(() => {});

export function useVideo() {
  return useContext(VideoContext);
}

export function VideoProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<{ id: string; title?: string } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = useCallback<OpenVideo>((id, title) => {
    if (!id) return;
    setActive({ id, title });
  }, []);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    document.body.classList.add("modal-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => closeRef.current?.focus(), 30);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [active, close]);

  return (
    <VideoContext.Provider value={open}>
      {children}
      {active ? (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.title ? `Video: ${active.title}` : "Video player"}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="video-modal__shell">
            <button className="video-modal__close" onClick={close} ref={closeRef} aria-label="Close video">
              <Close size={16} />
            </button>
            <div className="video-modal__frame">
              <iframe
                src={`https://player.vimeo.com/video/${active.id}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
                title={active.title ?? "Vantora Media video"}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="video-modal__caption">
              Press Esc to close · {active.title ?? "Client product video"}
            </p>
          </div>
        </div>
      ) : null}
    </VideoContext.Provider>
  );
}
