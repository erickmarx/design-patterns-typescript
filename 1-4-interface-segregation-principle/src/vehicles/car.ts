import { ICar } from "./car.interface";
import { IVehicle } from "./vehicle.interface";

export class Car implements ICar {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configureCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.log("Starting engine...");
  }

  configureCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void {
    console.log(
      `Carro da cor ${color}, do ano ${year} com motor de ${engine} e com ${seats} assentos`
    );

    this.startVehicle();
  }
}
