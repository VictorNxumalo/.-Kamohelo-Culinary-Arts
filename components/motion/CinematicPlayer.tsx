"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons/Icon";

type CinematicPlayerProps = {
  videoSrc: string;
  poster: string;
  playLabel?: string;
  playSublabel?: string;
  ariaLabel?: string;
  className?: string;
};

export function CinematicPlayer({
  videoSrc,
  poster,
  playLabel = "Play",
  playSublabel,
  ariaLabel = "Play video",
  className = "",
}: CinematicPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    setShowOverlay(false);
    void video.play();
  };

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    const onEnded = () => setShowOverlay(true);
    video.addEventListener("ended", onEnded);

    return () => {
      observer.disconnect();
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden border border-brand-gold/20 ${className}`}
    >
      <div className="relative aspect-video w-full bg-black">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={poster}
          playsInline
          muted
          controls={!showOverlay}
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {showOverlay && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label={ariaLabel}
          >
            <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm motion-reduce:animate-none md:h-24 md:w-24">
              <Icon name="play" size={32} className="ml-1 text-white" strokeWidth={1.5} />
            </span>
            <span className="brand-caps text-sm text-brand-cream">{playLabel}</span>
            {playSublabel && (
              <span className="mt-2 font-body text-xs text-brand-cream-muted">{playSublabel}</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
