import { IVehicle } from "./vehicle.interface";

export interface IMotorcycle extends IVehicle {
  configureMotorcycle(color: string, year: number, engine: number): void;
}
