import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

const validate = async (req: Request, res : Response, next : NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(httpStatus.BAD_REQUEST).json({success: "false", msg : "Invalid Email"});
  }
  return next();
};

export default validate;
