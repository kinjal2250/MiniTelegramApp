"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { TmaContext } from "./context";
import { TTelegramUser } from "@/types/telegram-user";
import { SDKProvider } from "@tma.js/sdk-react";

import { getTelegramUser } from "@/lib/utils";
import { ExternalLinkIcon, Wallet2Icon, WalletIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function TmaProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [telegramUser, setTelegramUser] = useState<TTelegramUser>(
    {} as TTelegramUser
  );

  function fetchTelegramUser() {
    try {
      const user = getTelegramUser();
      setTelegramUser(user);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(fetchTelegramUser, []);

  if (isLoading) {
    return <TmaProviderLoading />;
  }

  if (isError) {
    return <TmaProviderError />;
  }

  return (
    <SDKProvider acceptCustomStyles debug>
      <TmaContext.Provider value={{ user: telegramUser }}>
        {children}
      </TmaContext.Provider>
    </SDKProvider>
  );
}

// -------------------------------PRIVATE--------------------------------- //

function TmaProviderLoading() {
  return (
    <div className="min-h-screen grid place-items-center">
      <WalletIcon size={48} className="animate-pulse" />
    </div>
  );
}

function TmaProviderError() {
  const telegramAppLink = "https://t.me/my_mini_tele_app_bot";

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-xl flex flex-col gap-4">
        <Wallet2Icon size={36} />
        <code className="">
          Hmm, it seems like you are not using Telegram. Please open the app on
          Telegram to continue.
        </code>

        <Button asChild variant={"link"} className="w-fit h-fit p-0">
          <Link
            href={telegramAppLink}
            className="font-medium flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Open In Telegram</p>
            <ExternalLinkIcon size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
