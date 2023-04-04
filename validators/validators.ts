import { body } from "express-validator";

const SIGNUP_VALIDATOR = [
  body("email").isEmail().not().isEmpty().trim(),
];

export default SIGNUP_VALIDATOR;