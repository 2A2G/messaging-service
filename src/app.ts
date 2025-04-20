import express, { json } from "express";
import mongoose from "mongoose";
import sendEmailRoutes from "./routes/sendEmail.routes"
import templateRoutes from "./routes/templateEmail.routes";
import dotenv from "dotenv";
// import { dbUrl } from "./src/config/database";
dotenv.config();

const app = express();
app.use(json());

app.use("/api/templates", templateRoutes);
app.use("/messaging-service/email", sendEmailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// mongoose
//   .connect(dbUrl)
//   .then(() => console.log("🔥 Conectado a MongoDB"))
//   .catch((err) => console.error("❌ Error de conexión:", err));
