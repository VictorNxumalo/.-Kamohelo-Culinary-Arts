import type { ReactElement } from "react";

type ServiceIconProps = {
  name: "utensils" | "events" | "flame" | "consult";
  className?: string;
};

export function ServiceIcon({ name, className = "h-6 w-6" }: ServiceIconProps) {
  const paths: Record<ServiceIconProps["name"], ReactElement> = {
    utensils: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v18M9 3v6a3 3 0 006 0V3M6 8h12M6 12h12"
      />
    ),
    events: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 5h14v14H5zM9 3v4M15 3v4M5 9h14"
      />
    ),
    flame: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c-2 4-6 5-6 10a6 6 0 1012 0c0-5-4-6-6-10z"
      />
    ),
    consult: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    ),
  };

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.25}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
