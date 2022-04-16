import { IMotorcycle } from "./motorcycle.interface";

export class Motorcycle implements IMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }
  startVehicle(): void {
    console.log("Starting engine...");
  }
  configure(color: string, year: number, engine: number): void {
    console.log(`Criando um carro: ${color}, ${year}, ${engine} cavalos`);

    this.startVehicle();
  }
}
