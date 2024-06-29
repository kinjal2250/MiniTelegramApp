import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TTelegramUser } from "@/types/telegram-user";
import { retrieveLaunchParams, serializeThemeParams } from "@tma.js/sdk";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTelegramUser(): TTelegramUser | never {
  const launchParams = retrieveLaunchParams();
  const user = launchParams?.initData?.user;
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

export function getSerializedWallet(walletAddress?: string): string {
  if (!walletAddress) {
    return "";
  }
  return walletAddress.slice(0, 4) + "..." + walletAddress.slice(-4);
}

export function getSerilizedBalance(
  chainSymbol?: string,
  balance = BigInt(0)
): string {
  return (
    (parseFloat(balance.toString()) / 10 ** 18).toFixed(4) + " " + chainSymbol
  );
}

export function formatNumberToMoneySuffix(num: number): string {
  if (num < 1_000) {
    return num.toString();
  } else if (num < 1_000_000) {
    return (num / 1_000).toFixed(2).replace(/\.00$/, "") + "K";
  } else if (num < 1_000_000_000) {
    return (num / 1_000_000).toFixed(2).replace(/\.00$/, "") + "M";
  } else if (num < 1_000_000_000_000) {
    return (num / 1_000_000_000).toFixed(2).replace(/\.00$/, "") + "B";
  } else if (num < 1_000_000_000_000_000) {
    return (num / 1_000_000_000_000).toFixed(2).replace(/\.00$/, "") + "T";
  } else {
    return (num / 1_000_000_000_000_000).toFixed(2).replace(/\.00$/, "") + "Q";
  }
}

export function formatPriceChange(change: number): [string, boolean] {
  const formatted = change.toFixed(4);
  const isDown = change <= 0;

  return [formatted, isDown];
}
