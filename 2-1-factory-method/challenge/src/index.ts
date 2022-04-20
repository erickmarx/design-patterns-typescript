import { BikeTransport } from "./transport/bike-transport";
import { CarTransport } from "./transport/car-transport";
import { MotorcycleTransport } from "./transport/motorcycle-transport";
import { Transport } from "./transport/transport";

declare var process;
let transport: Transport;

if (process.argv.includes("--uber")) {
  transport = new CarTransport();
} else if (process.argv.includes("--log")) {
  transport = new MotorcycleTransport();
} else if (process.argv.includes("--bike")) {
  transport = new BikeTransport();
} else {
  console.error("Select a argv");
}

if (transport) console.log(transport.startTransport());
