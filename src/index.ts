import App from "./app";
import StringController from "./controllers/string.controller";
import StringService from "./services/string.service";

async function startServer() {
  const app = new App([new StringController(new StringService())]);
  app.listen();
}

startServer();
