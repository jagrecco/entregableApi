const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productos = require("./routes/productos");

let PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando el puerto: ${server.address().port}`);
});

server.on("error", (error) => `El servidor a tenido un error:${error}`);

app.use(express.static(__dirname + "/public"));


app.use("/api/productos", productos);
