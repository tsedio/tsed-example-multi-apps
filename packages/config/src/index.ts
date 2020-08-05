import "@tsed/common";
import "@tsed/swagger";

export const configuration: Partial<TsED.Configuration> = {
  acceptMimes: ["application/json"],
  httpsPort: false, // CHANGE
  swagger: [
    {
      path: "/docs",
      specPath: `${__dirname}/../spec/swagger.default.json`,
      cssPath: `${__dirname}/../spec/style.css`
    }
  ],
  exclude: ["**/*.spec.ts"]
};
