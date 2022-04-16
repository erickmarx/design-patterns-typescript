import { IVehicle } from "./vehicle.interface";

export interface ICar extends IVehicle {
  configureCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void;
}
