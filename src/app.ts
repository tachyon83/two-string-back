import express, { Application, Router } from "express";
import BaseController from "./controllers/base.controller";
import { notFoundHandler } from "./middlewares/not.found.handler";
import cors from "cors";

export default class App {
  app: Application;

  constructor(controllers: BaseController[]) {
    this.app = express();

    this.initMiddlewares();
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

  initMiddlewares() {
    this.app.use(express.json());
    this.app.use(
      cors({ origin: true, credentials: true, preflightContinue: true })
    );
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
