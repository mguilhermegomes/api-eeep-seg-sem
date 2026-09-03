import express from "express";
import methodOverride from "method-override";
import router from "./routes/router.js";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import { join } from "path";

const caminhoAtual = fileURLToPath(import.meta.url);
const caminhoPasta = join(caminhoAtual, "../");
const caminhoPublic = join(caminhoPasta, "../public");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(caminhoPublic));

app.engine(
  "handlebars",
  engine({
    extname: ".handlebars",
    defaultLayout: "main",
    layoutsDir: join(caminhoPasta, "views", "layouts"),
    partialsDir: join(caminhoPasta, "views", "partials"),
  }),
);

app.set("view engine", "handlebars");
app.set("views", join(caminhoPasta, "views"));

app.locals.urlbase = `http://localhost:${process.env.PORT}`;
app.locals.titulo = "Sistema de Gestão Escolar";

router(app);

export default app;
