import { TTelegramUser } from "@/types/telegram-user";
import { createContext } from "react";

export type TmaContextType = {
  user: TTelegramUser;
};

export const TmaContext = createContext<TmaContextType>({} as TmaContextType);
