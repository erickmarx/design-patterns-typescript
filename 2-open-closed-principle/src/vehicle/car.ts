import { ICar } from "./car.interface";

export class Car implements ICar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }
  startVehicle(): void {
    console.log("Starting engine...");
  }
  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log(
      `Criando um carro: ${color}, ${year}, ${engine} cavalos, ${doors} portas com ${seats} assentos`
    );

    this.startVehicle()
  }
}
