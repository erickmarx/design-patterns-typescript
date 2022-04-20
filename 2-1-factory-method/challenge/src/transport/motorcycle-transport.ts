import { Transport } from "./transport";
import { IVehicle } from "./vehicles/interfaces/IVehicle";
import { Motorcyle } from "./vehicles/motorcycle";

export class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Motorcyle();
  }
}
