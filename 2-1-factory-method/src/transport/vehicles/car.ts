import { IVehicle } from "./interfaces/IVehicle";

export class Car implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto...");
  }

  getCargo(): void {
    console.log("Pegando passageiros");
  }
}
