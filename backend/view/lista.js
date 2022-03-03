const listaController = require("../controller/lista")

module.exports = (app) => {
    app.post("/lista", async (req,res) =>{
        const lista = await listaController.list(req.body.codigo_postal)
        res.send(lista)
    })
}
