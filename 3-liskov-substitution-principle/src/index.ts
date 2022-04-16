import { CreditCard } from "./credit-card";
import { DebitCard } from "./debit-card";
import { NubankRewards } from "./nubank-rewards";

// const card = new CreditCard();
// const card = new DebitCard();
const card = new NubankRewards();
card.validate();
card.collectPayment();
