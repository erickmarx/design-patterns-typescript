import { IVehicle } from "./interfaces/IVehicle";

export class Motorcyle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega");
  }
  getCargo(): void {
    console.log("Pegando encomenda!");
  }
}
