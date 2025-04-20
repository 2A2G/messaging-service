"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailerConfig_1 = __importDefault(require("../config/nodemailerConfig"));
const sendEmail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ to, subject, html }) {
    try {
        const info = yield nodemailerConfig_1.default.sendMail({
            from: `"Messaging Service" <${process.env.MAIL_USER}>`,
            to,
            subject,
            html,
        });
        return info; // Retorna la información del envío
    }
    catch (error) {
        console.error("Error en el envío de correo:", error);
        throw new Error("No se pudo enviar el correo");
    }
});
exports.sendEmail = sendEmail;
