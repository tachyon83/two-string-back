import * as express from "express";

export const notFoundHandler = (
  req: express.Request,
  res: express.Response
) => {
  res.status(404).json({ message: "Not Found" });
};
