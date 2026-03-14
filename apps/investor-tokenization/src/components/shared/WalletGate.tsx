"use client";

import { useWalletContext } from "@tokenization/tw-blocks-shared/src/wallet-kit/WalletProvider";
import { useWallet } from "@tokenization/tw-blocks-shared/src/wallet-kit/useWallet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@tokenization/ui/card";
import { Button } from "@tokenization/ui/button";
import { Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

type WalletGateProps = {
  children: ReactNode;
};

/**
 * Protege el contenido: si no hay wallet conectada, muestra una tarjeta
 * para conectar en lugar del contenido. Usa Card (no Dialog) para evitar
 * conflictos de z-index con el modal del wallet kit.
 */
export function WalletGate({ children }: WalletGateProps) {
  const { walletAddress } = useWalletContext();
  const { handleConnect } = useWallet();
  const router = useRouter();

  if (walletAddress) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-1 min-h-0 flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="size-5" />
            Conecta tu billetera
          </CardTitle>
          <CardDescription>
            Necesitas conectar tu billetera para ver tus inversiones y acceder a
            esta sección.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => router.push("/campaigns")}>
            Volver
          </Button>
          <Button onClick={handleConnect} size="lg">
            <Wallet className="size-4 mr-2" />
            Conectar Billetera
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
