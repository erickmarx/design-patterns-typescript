import { IPaymentInstrument } from "./paymentInstruments.interface";

export abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log("Validação básica");
  }
  collectPayment(): void {
    console.log("Pagamento realizado");
  }
}
