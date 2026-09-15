import type { SVGProps } from "react";

export function LeetCodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.5 2.5l-3 17" />
      <path d="M18 9l-6 5.5" />
      <path d="M10 9l6 5.5" />
      <path d="M5.5 14.5l3-17" />
    </svg>
  );
}
