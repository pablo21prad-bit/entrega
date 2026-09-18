import  {Router} from "express"
import { readFile, writeFile } from  "fs/promises";
import { json } from "stream/consumers";

const router = Router();


/* rutas de productos */
const fileProductos = await readFile('./data/productos.json', 'utf-8');

const productos = JSON.parse(fileProductos);

router.get('/:disponibles', (req, res) => {

    const result =  productos
    .filter(e => e.disponible === true)
    .map(e => ([e.nombre, e.precio]))
    
    if (result.length > 0){
        res.status(200).json(result);
} 
else {
  res.status(401).json({ message: 'no hay productos disponibles' })
}
});


router.put('/precio/update/:id', (req, res) => {
    const id = req.params.id;
    const newPrecio = req.body.precio
    const index = productos.findIndex(e => e.id_producto == id)

    if (index != -1){
        productos[index].precio = newPrecio
        writeFile("./data/productos.json",
            JSON.stringify(productos,null,2)
        )
        res.status(200).json("PRECIO MODIFICADO");
    }
    else {
  res.status(401).json({ message: 'ERROR AL MODIFICAR' })
}
    

});


export default router