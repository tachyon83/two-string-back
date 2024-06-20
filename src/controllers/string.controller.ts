import * as express from "express";
const Router = express.Router;

import BaseController from "./base.controller";
import requestHandler from "./request.handler";
import StringService from "../services/string.service";

export default class StringController extends BaseController {
  path = "/string";

  constructor(service: StringService) {
    super(service);
    this.init();
  }

  init() {
    const router = Router();

    router.post("/compare", requestHandler(this.compare));

    this.router.use(this.path, router);
  }

  compare = async (req: express.Request, res: express.Response) => {
    console.log(25, req.body);
    req.body = JSON.parse(req.body);
    return this.service.compare(req.body.str1, req.body.str2);
  };
}
