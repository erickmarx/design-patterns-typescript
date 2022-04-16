import { NubankCard } from "./nubank-card";

export class DebitCard extends NubankCard {
  validate(): void {
    console.log("Validando se há saldo suficiente...");
  }
}
