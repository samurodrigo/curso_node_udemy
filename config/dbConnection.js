const mysql = require("mysql")

const createConnection = () => {
    console.log("Conexão com o bd estabelecida...")
    return  mysql.createConnection({
        host: "localhost",
        user: "samurodrigo",
        password: "123456",
        database: "portal_noticias"
    })
}
module.exports = function() {
    console.log("Autoload carregou o modulo de conexão com o banco de dados")
    return createConnection
}