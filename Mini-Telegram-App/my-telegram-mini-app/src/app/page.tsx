import { Container } from "@/components/container";
import { Me } from "@/components/me";
import { Button } from "@/components/ui/button";
import { Account } from "@/components/wallet/account";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Container>
        <span className="flex flex-col justify-between h-full">
          <Account />
          <Button asChild>
            <Link href="/theme">Theme</Link>
          </Button>
        </span>
      </Container>
    </main>
  );
}
