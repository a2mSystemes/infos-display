import { EndingLapRunner } from "./EndingLapRunner";
import { IExporterResult } from "../race-result.model/IExporterResult";


export class LapFinisher extends EndingLapRunner {
  constructor(jsonData?: IExporterResult) {
    super(jsonData);
    this.type = "lapFinisher";
  }
}
