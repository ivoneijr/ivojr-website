"use client";

import { useEffect, useState } from "react";

import { SettingsDialog } from "@/components/overlays/dialogs/settings";

export const OverlaysProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsDialog />
    </>
  );
};
