const listaModel = require("../model/lista")

module.exports.list = async (codigo_postal) =>{
    return await listaModel.list(codigo_postal)
}