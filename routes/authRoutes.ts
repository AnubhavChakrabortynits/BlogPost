import { Router } from "express";
import { authControllers } from "@controllers";
import { SIGNUP_VALIDATOR, validate } from "validators";

const router: any = Router();

router.post('/signup', SIGNUP_VALIDATOR, validate, authControllers.signup)
router.post("/login", authControllers.login);
// router.get("/logout", authControllers.logout);
router.post('/forgotPassword', authControllers.forgotPassword)
router.post('/resetPassword/:id/:resetToken', authControllers.resetPassword)

export {router}