import { PropsWithChildren } from "react";
import { Navbar } from "./navbar";

export function Container(props: PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen w-full">
      <Navbar />
      <div className="flex-1 p-4">{props.children}</div>
    </div>
  );
}
