"use client";

import { type PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { CONFIG } from "@/lib/constants";
import { TooltipProvider } from "@/components/ui/tooltip";

import { ThemeProvider } from "./theme-provider";
import { OverlaysProvider } from "./overlays-provider";

export const Providers = ({ children }: PropsWithChildren) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: CONFIG.QUERY_STALE_TIME,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <ReactQueryStreamedHydration>
          <OverlaysProvider />
          <TooltipProvider>{children}</TooltipProvider>
        </ReactQueryStreamedHydration>
        {CONFIG.ENABLE_QUERY_DEVTOOLS && (
          <ReactQueryDevtools initialIsOpen={false} position="left" buttonPosition="top-left" />
        )}
      </ThemeProvider>
    </QueryClientProvider>
  );
};
