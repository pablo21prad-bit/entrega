import  {Router} from "express"
import { readFile, writeFile } from  "fs/promises";


const fileUser = await readFile('./data/users.json', 'utf-8');
const users = JSON.parse(fileUser);

const router = Router();

router.post('/login', (req, res) => {
const user = req.body.user;
const pass = req.body.pass;

const result = users.find(e => e.user === user && e.pass === pass);
if (result) {
  res.status(200).json({ message: 'usuario encontrado' });
} else {
  res.status(401).json({ message: 'usuario no encontrado' })
}
})

router.delete('/delete/:id', (req, res) => {
const id = req.params.id;
const index = users.findIndex(user => user.id_usuario == id);
if (index !== -1) {
  users.splice(index, 1);
    writeFile('./data/users.json', JSON.stringify(users, null, 2))

    res.status(200).json({ message: 'usuario eliminado' });
} 
else {
  res.status(404).json({ message: 'usuario no encontrado' });
}
})


export default router
