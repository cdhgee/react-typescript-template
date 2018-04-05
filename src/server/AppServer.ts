import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

class AppServer {

  private readonly app: express.Application;

  constructor() {
    this.app = express();

    this.app.use(bodyParser.urlencoded({
      extended: true,
    }));
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));

    this.app.set("env", "development");
    this.app.set("port", 3000);
    this.app.locals.pretty = true;

    this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
      console.log(err.stack);
      next(err);
    });

    let router: express.Router = express.Router();
    console.log(__dirname);
    router.use("/node_modules", express.static(`${__dirname}/node_modules`));
    this.app.use(router);

    this.start();
  }

  private start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Express server listening on port ${ this.app.get("port") }`);
    });
  }
}

export { AppServer };
