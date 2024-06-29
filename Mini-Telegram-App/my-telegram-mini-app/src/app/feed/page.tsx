import { CoinCard } from "@/components/coin-card";
import { getAllCoins } from "@/lib/coingecko";

export default async function Feed() {
  const coins = await getAllCoins("usd");

  return (
    <div className="space-y-2">
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
