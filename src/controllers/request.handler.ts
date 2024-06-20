import * as express from "express";

export default function (
  handler: (req: express.Request, res: express.Response) => {}
) {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const data = await handler(req, res);
      res.status(200).json({
        data,
      });
    } catch (err) {
      next(err);
    }
  };
}
