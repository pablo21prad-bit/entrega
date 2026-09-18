hola profe en la parte de user.routes.js tenemos:

*router.post('/login') (para hacer el login y pass atravez del body, si nos encuentgra nos dice usuario encontrado sino usuario no encontrado)

*router.delete ('/delete/:id') (para eliminar vendedores que no tienen ventas -- ( id: nuemro 8 y 9 los cree sin ventas, puede probar con esos id) para no afectar la integridad) aca lo aprendi con el chatgp xq la integridad no la habia entendido bien


la parte de productos.routes.js tenemos:

*router.get('/:disponibles') (para consultar los productos disponibles)

*router.put('/precio/update/:id') (modificar el precio de un producto atravez de su id)

la parte de ventas.routes.js tenemos:

*router.post('/:fechas') (consultar las ventas entre 2 fechas atravez de body ("desde" , "hasta"))

router.get("/:impagas") (consultar si hay ventas impagas aun)