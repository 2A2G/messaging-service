"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sendEmail_controller_1 = require("../controllers/sendEmail.controller");
const router = (0, express_1.Router)();
router.post("/welcome", sendEmail_controller_1.welcome);
exports.default = router;
