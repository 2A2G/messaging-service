import express, { json } from "express";
import emailRoutes from "./src/routes/emailRoutes.js";

const app = express();
app.use(json());

app.use("/messaging-service", emailRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
