import type { PropsWithChildren } from "react";

export const BlankPage = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative m-2 p-2 flex-1 h-full overflow-hidden rounded-sm border border-dashed border-gray-400 opacity-75">
      <svg className="absolute inset-0 size-full stroke-gray-900/10" fill="none" aria-label="Pattern SVG" role="img">
        <defs>
          <pattern
            id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
          </pattern>
        </defs>
        <rect stroke="none" fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)" width="100%" height="100%" />
      </svg>

      <div className="absolute inset-0 flex justify-center items-center">{children}</div>
    </div>
  );
};
