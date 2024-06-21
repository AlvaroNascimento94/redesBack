const express = require("express");
const cors = require("cors");
const app = express();

// Configuração do CORS mais granular
const corsOptions = {
  origin: "http://3.144.91.203", // Substitua pelo domínio do seu front-end em produção
  methods: ["GET", "POST"], // Métodos HTTP permitidos
  allowedHeaders: ["Content-Type"], // Cabeçalhos permitidos
};

app.use(cors(corsOptions));

app.use(express.json());

// DB Connection
const conn = require("./db/conn");
conn();

// Routes
const routes = require("./routes/router");
app.use("/api", routes);

app.listen(3000, function () {
  console.log("Servidor Online!");
});
