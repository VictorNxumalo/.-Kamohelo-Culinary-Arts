"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, IconBox } from "@/components/icons/Icon";
import type { IconName } from "@/lib/icons";

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  icon: IconName;
};

type ExperienceTimelineProps = {
  items: ReadonlyArray<TimelineItem>;
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

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef<(HTMLElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(() => new Set());
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportMid = window.innerHeight * 0.55;
      const traveled = viewportMid - rect.top;
      const next = Math.min(1, Math.max(0, traveled / Math.max(rect.height, 1)));
      setProgress(next);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const nodes = milestoneRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);
          ratios.set(index, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        const visible = new Set<number>();
        let bestIndex = 0;
        let bestRatio = 0;

        ratios.forEach((ratio, index) => {
          if (ratio > 0.15) visible.add(index);
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        setVisibleIndices(visible);
        if (bestRatio > 0) setActiveIndex(bestIndex);
      },
      { threshold: [0, 0.15, 0.35, 0.55, 0.75, 1], rootMargin: "-10% 0px -15% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items.length]);

  const fillProgress = prefersReducedMotion ? 1 : progress;

  return (
    <div ref={sectionRef} className="experience-timeline relative">
      <div className="experience-timeline-ambient" aria-hidden="true">
        <span className="experience-timeline-orb experience-timeline-orb--a" />
        <span className="experience-timeline-orb experience-timeline-orb--b" />
      </div>

      {/* Horizontal journey scrubber — desktop */}
      <div className="experience-timeline-scrubber mb-12 hidden md:block" aria-hidden="true">
        <div className="experience-timeline-scrubber-track">
          <div
            className="experience-timeline-scrubber-fill"
            style={{ width: `${fillProgress * 100}%` }}
          />
          <div
            className="experience-timeline-scrubber-marker"
            style={{ left: `${(activeIndex / Math.max(items.length - 1, 1)) * 100}%` }}
          />
        </div>
        <div className="mt-4 flex justify-between gap-2">
          {items.map((item, i) => (
            <span
              key={item.title}
              className={`sub-label text-[10px] transition-all duration-500 ${
                i <= activeIndex ? "text-metallic-gold" : "text-brand-text-muted"
              }`}
            >
              {item.period.replace("In Development", "Now")}
            </span>
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Animated spine */}
        <div className="experience-timeline-spine" aria-hidden="true">
          <div className="experience-timeline-spine-base" />
          <div
            className="experience-timeline-spine-fill"
            style={{ transform: `scaleY(${fillProgress})` }}
          />
          <svg className="experience-timeline-spine-flow" viewBox="0 0 4 100" preserveAspectRatio="none">
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="100"
              className="experience-timeline-spine-dash"
            />
          </svg>
        </div>

        <ol className="relative space-y-10 md:space-y-12">
          {items.map((item, i) => {
            const isActive = activeIndex === i;
            const isVisible = visibleIndices.has(i) || prefersReducedMotion;
            const isPresent = item.period.toLowerCase().includes("present");

            return (
              <li
                key={item.title}
                ref={(el) => {
                  milestoneRefs.current[i] = el;
                }}
                data-index={i}
                className={`experience-timeline-milestone ${
                  isVisible ? "experience-timeline-milestone--visible" : ""
                } ${isActive ? "experience-timeline-milestone--active" : ""}`}
                style={{ transitionDelay: prefersReducedMotion ? "0ms" : `${i * 80}ms` }}
              >
                <div className="experience-timeline-node" aria-hidden="true">
                  <span className="experience-timeline-node-core" />
                  {isActive && !prefersReducedMotion && (
                    <>
                      <span className="experience-timeline-node-ring" />
                      <span className="experience-timeline-node-ring experience-timeline-node-ring--delayed" />
                    </>
                  )}
                </div>

                <article className="experience-timeline-card card-light p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <div
                        className={`experience-timeline-icon ${isActive ? "experience-timeline-icon--active" : ""}`}
                      >
                        <IconBox name={item.icon} className="mb-0 h-10 w-10" size={18} />
                      </div>
                      <div>
                        <h3 className="brand-caps text-sm text-brand-cream">{item.title}</h3>
                        <p className="mt-1 font-body text-sm font-medium text-metallic-gold">
                          {item.org}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`experience-timeline-period sub-label ${
                        isPresent ? "experience-timeline-period--live" : ""
                      }`}
                    >
                      {isPresent && (
                        <span className="experience-timeline-live-dot" aria-hidden="true" />
                      )}
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 body-readable text-sm">{item.description}</p>
                  {isActive && (
                    <p className="experience-timeline-active-cue sub-label mt-4 text-brand-text-muted">
                      <Icon name="arrow-right" size={12} className="inline text-brand-gold" />
                      Current chapter
                    </p>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
