import { ConnectWalletButton } from "./connect-wallet-button";
import { Me } from "./me";
import { Menu } from "./menu";

type NavbarProps = {};

export function Navbar(props: NavbarProps) {
  return (
    <nav className="border-b p-2 flex items-center justify-between">
      <Menu />
      <ConnectWalletButton />
    </nav>
  );
}
