import {Server} from "@project/server";
import {$log} from "@tsed/common";
import {PlatformExpress} from "@tsed/platform-express";

const rootDir = __dirname;

async function bootstrap() {
  try {
    $log.debug("Start server...");
    const platform = await PlatformExpress.bootstrap(Server, {
      httpPort: 8881,
      mount: {
        "/rest/v1": [
          `${rootDir}/controllers/**/*Controller.ts`
        ]
      }
    });

    await platform.listen();
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap();
