import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ProfileCardProps = {
  address: string;
  balance: string;
  name: string;
  isWalletConnected: boolean;
};

export function ProfileCard(props: ProfileCardProps) {
  return (
    <Card className="font-mono shadow-none rounded-md">
      <CardHeader>
        <CardTitle>{props.name + "'s"} Profile</CardTitle>
        <CardDescription>Profile Details</CardDescription>
      </CardHeader>
      {props.isWalletConnected ? (
        <CardContent>
          <CardDescription>Wallet Address: {props.address}</CardDescription>
          <CardDescription>Wallet Balance: {props.balance}</CardDescription>
        </CardContent>
      ) : (
        <CardContent>
          <CardDescription>
            You {"haven't"} connected your wallet yet, Please connect your
            wallet
          </CardDescription>
        </CardContent>
      )}
    </Card>
  );
}
