"use client";

import { useTma } from "./tma/hook";

export function Me() {
  const { user } = useTma();

  return <>{user?.firstName + "'s "} Account</>;
}
