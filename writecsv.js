const fs = require("fs")
const csv = require("csv")

function writeCSV() {
    const escribir = fs.createWriteStream("./usuarios.csv")

const datos = [
    {
        nombres: "Laura",
        correos: "lauram@local.com",
        puesto: "administracion"
    }
]

csv.stringify(datos, 
    {
        header: true,
        columns: {
            nombres: "NOMBRES",
            correos: "CORREO",
            puesto: "PUESTO"
        }
    }
)
.pipe(escribir)
}

module.exports = {
    writeCSV
}