const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//Crear el servidor
const app = express();
//Conectar la BD
conectarDB();
app.use(express.json());
app.use(cors());
app.use("/api/agencias", require("./routes/agencyRoute"));

const port = process.env.PORT || 9000;

//Ruta inicial del servidor

app.get("/", (request, response) => {
  response.send("Server API Rest");
});

//Levantar el servidor

app.listen(port, () => console.log("Server listening in port", port));
