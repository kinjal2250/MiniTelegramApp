import { TCoin } from "@/types/coin";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { formatNumberToMoneySuffix, formatPriceChange } from "@/lib/utils";

type CoinCardProps = {
  coin: TCoin;
};

export function CoinCard({ coin }: CoinCardProps) {
  const price = formatNumberToMoneySuffix(coin?.current_price);
  const marketCap = formatNumberToMoneySuffix(coin?.market_cap);
  const volume = formatNumberToMoneySuffix(coin?.total_volume);
  const [priceChange, isDown] = formatPriceChange(coin?.price_change_24h);

  return (
    <Card className="w-full max-w-md shadow-none rounded-md p-2 space-y-2">
      {/* head */}
      <div className="flex items-center gap-2">
        <Image
          src={coin.image}
          alt={coin.name}
          width={64}
          height={64}
          className="rounded-full w-7 h-7"
        />
        <p className="font-mono font-medium text-lg">
          {coin.name} ({coin.symbol.toUpperCase()})
        </p>
      </div>
      <Separator />
      {/* body */}
      <CardContent className="p-2 font-mono">
        <CardDescription>Price: ${price}</CardDescription>
        <CardDescription>Market Cap: ${marketCap}</CardDescription>
        <CardDescription>Volume: ${volume}</CardDescription>
        <CardDescription>
          Price Change (24h) :{" "}
          {isDown ? (
            <span className="text-red-500">{priceChange}%</span>
          ) : (
            <span className="text-green-500">{priceChange}%</span>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
