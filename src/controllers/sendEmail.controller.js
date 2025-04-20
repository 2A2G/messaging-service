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
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = void 0;
const sendEmail_service_js_1 = require("../services/sendEmail.service.js");
const welcome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { to, subject, message } = req.body;
        if (!to || !subject || !message) {
            return res
                .status(400)
                .json({ message: "Faltan parámetros en la solicitud" });
        }
        yield (0, sendEmail_service_js_1.sendEmail)({
            to,
            subject,
            html: `<p>${message}</p>`,
        });
        res.status(200).json({ message: "Correo enviado con éxito" });
    }
    catch (error) {
        console.error("Error al enviar el correo:", error);
        res
            .status(500)
            .json({ message: "Error al enviar el correo", error: error.message });
    }
});
exports.welcome = welcome;
