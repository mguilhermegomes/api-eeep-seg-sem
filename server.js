import "dotenv/config";
import app from "./src/app.js";
import { createServer } from "http";

const PORT = process.env.PORT || 3000;

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor escutando em http://localhost:${PORT}`);
});
