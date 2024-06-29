import { Container } from "@/components/container";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
