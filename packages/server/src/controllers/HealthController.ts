import {Controller, Get} from "@tsed/common";
import {Summary} from "@tsed/swagger";

@Controller("/health")
export class HealthController {
  @Get("/")
  @Summary("Check health server")
  get() {
    return "OK";
  }
}
