import {Controller, Get} from "@tsed/common";
import {Summary} from "@tsed/swagger";

@Controller("/version")
export class VersionController {
  @Get("/")
  @Summary("Return deployed server version")
  get() {
    return {
      version: require("../../package.json").version
    };
  }
}
