import { Car } from "./vehicle/car";
import { Motorcycle } from "./vehicle/motorcycle";
import { EnumTypeVehicle } from "./vehicle/vehicle.enum";

const type = EnumTypeVehicle.MOTORCYCLE;
let vehicle: Car | Motorcycle;

if (type === EnumTypeVehicle.CAR) {
  vehicle = new Car("Amarelo", 2022, 2.0, 4, 4);
} else {
  vehicle = new Motorcycle("Amarelo", 2022, 300);
}
