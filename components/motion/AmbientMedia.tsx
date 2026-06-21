"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MotionHeroConfig } from "@/lib/motion";

type AmbientMediaProps = MotionHeroConfig & {
  className?: string;
  priority?: boolean;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function AmbientMedia({
  poster,
  videoSrc,
  fallbackVideoSrc,
  mediaOpacity = 0.3,
  className = "",
  priority = false,
}: AmbientMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  const candidateSrc = videoSrc ?? fallbackVideoSrc;

  useEffect(() => {
    if (prefersReducedMotion || !candidateSrc) {
      setActiveSrc(null);
      setVideoReady(false);
      return;
    }
    setActiveSrc(candidateSrc);
    setVideoReady(false);
  }, [candidateSrc, prefersReducedMotion, videoSrc, fallbackVideoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || !activeSrc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [activeSrc, videoReady]);

  function handleVideoError() {
    if (activeSrc === videoSrc && fallbackVideoSrc && fallbackVideoSrc !== videoSrc) {
      setActiveSrc(fallbackVideoSrc);
      setVideoReady(false);
      return;
    }
    setActiveSrc(null);
    setVideoReady(false);
  }

  const showVideo = Boolean(activeSrc) && videoReady;

  return (
    <div ref={containerRef} className={`ambient-media ${className}`} aria-hidden="true">
      <Image
        src={poster}
        alt=""
        fill
        className={`object-cover transition-opacity duration-1000 ease-premium ${
          showVideo ? "opacity-0" : "ambient-media-poster opacity-100"
        }`}
        style={showVideo ? undefined : { opacity: mediaOpacity }}
        sizes="100vw"
        priority={priority}
      />

      {activeSrc && (
        <video
          ref={videoRef}
          key={activeSrc}
          className="ambient-media-video h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: showVideo ? mediaOpacity : 0 }}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          onLoadedData={() => setVideoReady(true)}
          onError={handleVideoError}
        >
          <source src={activeSrc} type="video/mp4" />
        </video>
      )}

      <div className="ambient-media-mist pointer-events-none absolute inset-0" />
    </div>
  );
}
