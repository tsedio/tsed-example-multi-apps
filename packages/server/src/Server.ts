import {configuration} from "@project/config";
import "@tsed/ajv";
import {importFiles, PlatformApplication} from "@tsed/common";
import {Configuration, Inject} from "@tsed/di";
import "@tsed/platform-express"; // /!\ keep this import
import "@tsed/swagger";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as methodOverride from "method-override";

export const rootDir = __dirname;
console.log(`${rootDir}/controllers/**/*.ts`);

@Configuration({
  rootDir,
  commonServerDir: rootDir,
  ...configuration,
  mount: {
    "/rest": [
     `${rootDir}/controllers/**/*.ts`
    ]
  }
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  $onInit() {
    console.log(this.settings.mount);
  }

  $beforeRoutesInit() {
    this.app
      .use(cors())
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true
        })
      );

    return null;
  }
}
