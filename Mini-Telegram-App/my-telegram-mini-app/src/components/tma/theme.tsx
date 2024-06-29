"use client";

import { useThemeParams } from "@tma.js/sdk-react";

export function TmaTheme() {
  const theme = useThemeParams();

  return <pre>{JSON.stringify(theme.getState(), null, 2)}</pre>;
}
