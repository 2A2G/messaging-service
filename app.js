import express, { json } from "express";
import emailRoutes from "./src/routes/emailRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(json());

app.use("/messaging-service", emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
