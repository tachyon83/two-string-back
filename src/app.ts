import express from "express";
import BaseController from "./controllers/base.controller";

const Router = express.Router;

export default class App {
  app;

  constructor(controllers: BaseController[]) {
    this.app = express();

    this.initControllers(controllers);
  }

  listen() {
    const port = process.env.PORT || 4000;
    this.app.listen(port, () => {
      console.log(`App started listening on the port #:${port}`);
    });
  }

  getServer() {
    return this.app;
  }

  initControllers(controllers?: BaseController[]) {
    const router = Router();

    if (controllers) {
      controllers.forEach((controller) => {
        router.use(controller.router);
      });
    }

    this.app.use("/", router);
  }
}
