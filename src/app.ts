import express, { Application, Router } from "express";
import BaseController from "./controllers/base.controller";
import { notFoundHandler } from "./middlewares/not.found.handler";

export default class App {
  app: Application;

  constructor(controllers: BaseController[]) {
    this.app = express();

    this.initControllers(controllers);
    this.initNotFoundHandler();
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

  initNotFoundHandler() {
    this.app.use(notFoundHandler);
  }
}
