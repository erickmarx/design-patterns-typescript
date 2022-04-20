import { IVehicle } from "./interfaces/IVehicle";

export class Bike implements IVehicle {
  startRoute(): void {
    console.log("Começando a rota de Bike");
  }
  getCargo(): void {
    console.log("Pegando lanches");
  }
}
