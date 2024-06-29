import { TmaTheme } from "@/components/tma/theme";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Theme() {
  return (
    <span className="flex flex-col justify-between h-full">
      <TmaTheme />
      <Button asChild>
        <Link href="/">Main</Link>
      </Button>
    </span>
  );
}
