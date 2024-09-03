const fs = require("fs")
const csv = require("csv")

function readCSV() {
    const resultados = []

    fs.createReadStream("usuarios.csv")
    .pipe(csv.parse({
        trim: true,
        skip_empty_lines: true,
        columns: true
    }))
    .on("data", (fila) => {
        resultados.push(fila)
    })
    .on("end", () => {
        console.table(resultados)
        console.log("SE TERMINO DE LEER EL CSV")
    })
}

module.exports = {
    readCSV
}