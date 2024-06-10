import { Router } from "express";
import { verifyCode } from "../controller/verification.controller";
import { validate } from "../middleware/schemaValidator";
import { verificationCodeSchema } from "../validator/verification-code.validator";

const router = Router();
router.post("/verification-code", validate(verificationCodeSchema), verifyCode);

export default router;
