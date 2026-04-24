import type { SVGProps } from "react";

const PhpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 64" fill="none" {...props}>
    <ellipse cx="64" cy="32" rx="60" ry="28" fill="#777BB4" />
    <path
      fill="#fff"
      d="M37.5 22.5h8.5c5 0 8 2.5 8 6.5 0 4.5-3.5 7.5-8.5 7.5h-3l-1.5 7h-5l4.5-21Zm7.5 10c2 0 3.5-1 3.5-2.8 0-1.5-1-2.3-3-2.3h-3l-1.2 5.1h3.7ZM58 22.5h5l-1.5 7h5.5l1.5-7h5l-4.5 21h-5l1.7-8h-5.5l-1.7 8h-5l4.5-21ZM80.5 22.5H89c5 0 8 2.5 8 6.5 0 4.5-3.5 7.5-8.5 7.5h-3l-1.5 7h-5l4.5-21Zm7.5 10c2 0 3.5-1 3.5-2.8 0-1.5-1-2.3-3-2.3h-3l-1.2 5.1H88Z"
    />
  </svg>
);

export { PhpIcon };