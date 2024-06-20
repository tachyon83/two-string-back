import * as express from "express";
import StringService from "../services/string.service";
const Router = express.Router;

type ServiceTypes = StringService;

export default class BaseController {
  router = Router();
  service: ServiceTypes;

  constructor(service: ServiceTypes) {
    this.service = service;
  }
}
