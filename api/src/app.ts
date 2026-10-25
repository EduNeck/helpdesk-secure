import express from "express";
import helmet from "helmet";
import { db } from "./config/database.js";

const app = express();

// Evita anunciar innecesariamente que usamos Express.
app.disable("x-powered-by");

// Agrega cabeceras HTTP de seguridad.
app.use(helmet());

// Permite JSON, pero limita el tamaño de las peticiones.
app.use(
  express.json({
    limit: "1mb",
  }),
);

// Endpoint simple para comprobar que la API está funcionando.
app.get("/health", async (_req, res) => {
  try {
    await db.query("SELECT 1");

    res.status(200).json({
      status: "ok",
      database: "connected",
    });
  } catch (error) {
    console.error("Database health check failed");

    res.status(503).json({
      status: "error",
      database: "unavailable",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Helpdesk API running on port ${PORT}`);
});
