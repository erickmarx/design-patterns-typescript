import { NubankCard } from "./nubank-card";

export class CreditCard extends NubankCard {
  validate(): void {
    console.log("Verificando o limite...");
  }
}
