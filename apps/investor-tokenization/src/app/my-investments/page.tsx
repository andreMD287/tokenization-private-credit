"use client";

import { InvestmentsView } from "@/features/investments/InvestmentsView";
import { WalletGate } from "@/components/shared/WalletGate";

export default function MyInvestmentsPage() {
  return (
    <WalletGate>
      <InvestmentsView />
    </WalletGate>
  );
}
