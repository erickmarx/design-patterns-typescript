import Client from "./client";

export default class notify {
  constructor(private client: Client) {}

  sendEmail(): boolean {
    this.client.email;
    return true;
  }
}
