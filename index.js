/*importamos express*/
import express from "express";

/* importamos los metodos readfile y writefile de fs/promises para poder leer y escribir archivos de manera asincrona*/
import { readFile, writeFile } from  "fs/promises";

import UserRouter from "./routes/user.routes.js"
import ProductosRouter from "./routes/productos.routes.js"
import ventasRouter from "./routes/ventas.routes.js"

/*creamos una instancia de express*/
const app = express();

/*definimos el puerto en el que se ejecutará el servidor*/
const PORT = 3001;

/*le permite al servidor entender los datos JSON que llegan en el Body*/
app.use(express.json());

/*levantamos el servidor*/
app.listen(PORT, () => {
  console.log(`servidor levantado en el puerto ${PORT}`);
});

app.get("/" , (req, res) => {
    res.send(`hola`)
})

/*rutas de usuario*/

app.use("/users", UserRouter)
app.use("/productos", ProductosRouter)
app.use("/ventas", ventasRouter)
