import process from "process";

import {AppServer} from "./server/AppServer";

function main(): void {

  let appServer: AppServer = new AppServer();

  process.on("SIGINT", (): void => {
    console.log("Exiting.");
    process.exit(0);
  });

}

main();
