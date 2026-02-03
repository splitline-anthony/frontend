import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1560" height="1560" viewBox="0 0 1560 1560" {...props}>
      <title>Splitline Logo</title>
      <mask
        id="mask0_45_173"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="280"
        y="880"
        width="1000"
        height="500"
      >
        <path
          d="M1280 1380H280V1280H1280V1380ZM1280 1180H280V1080H1280V1180ZM1280 980H280V880H1280V980Z"
          fill="#A3722E"
        />
      </mask>
      <g mask="url(#mask0_45_173)">
        <path d="M880 1380H1280L680 780H280L880 1380Z" fill="currentColor" />
      </g>
      <path d="M880 180H1280L680 780H280L880 180Z" fill="currentColor" />
    </svg>
  );
}
