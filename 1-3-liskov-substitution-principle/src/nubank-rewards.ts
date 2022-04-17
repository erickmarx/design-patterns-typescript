import { IPaymentInstrument } from "./paymentInstruments.interface";

export class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log("Verificar a pontuação");
  }
  collectPayment(): void {
    console.log("Pagar com a pontuação do rewards");
  }
}
