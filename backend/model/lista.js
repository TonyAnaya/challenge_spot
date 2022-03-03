const sql = require("../db/conexion")

module.exports.list = async (codigo_postal) => {
    let result = await sql.query('SELECT * FROM data WHERE cp LIKE '+ codigo_postal + '')
    return result[0]
}
