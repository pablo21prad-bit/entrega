import  {Router} from "express"
import { readFile, writeFile } from  "fs/promises";

const fileVentas = await readFile('./data/ventas.json', 'utf-8');
const ventas = JSON.parse(fileVentas);

const router = Router();

router.post('/:fechas', (req, res) => {
    const desde = req.body.desde;
    const hasta = req.body.hasta;

    const result =  ventas
    .filter(e => e.fecha >= desde && e.fecha <= hasta )
    
    
    if (result.length > 0){
        res.status(200).json(result);
} 
else {
  res.status(401).json({ message: 'no hay ventas disponibles' })
}
});


router.get("/:impagas", (req, res) => {

    const result = ventas.filter(e => e.pagada === false)

    if (result != -1){
        res.status(200).json(result)
    }
    else {
  res.status(401).json({ message: 'no hay ventas impagas' })
}

});


export default router