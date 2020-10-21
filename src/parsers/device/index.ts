import MobileParser from "./mobiles";
import { GenericDeviceResult } from "../../typings/device";

export type DeviceResult = GenericDeviceResult | null;

export default class ClientParser {
  public parse = (userAgent: string): DeviceResult => {
    const parser = new MobileParser();
    const device = parser.parse(userAgent);

    if (device.type !== "") {
      return device;
    }

    return null;
  };
}
