import type { SVGProps } from "react";

const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" {...props}>
    <path
      fill="#F24E1E"
      d="M96 32a32 32 0 0 0 0 64h64V32H96Z"
    />
    <path
      fill="#FF7262"
      d="M96 96a32 32 0 0 0 0 64h64V96H96Z"
    />
    <path
      fill="#A259FF"
      d="M96 160a32 32 0 1 0 0 64 32 32 0 0 0 0-64Z"
    />
    <path
      fill="#1ABCFE"
      d="M160 32a32 32 0 1 0 0 64 32 32 0 0 0 0-64Z"
    />
    <path
      fill="#0ACF83"
      d="M160 96a32 32 0 1 0 0 64 32 32 0 0 0 0-64Z"
    />
  </svg>
);

export { FigmaIcon };