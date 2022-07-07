let rs = require ('readline-sync')

let mes = rs.question('digite o mes:')

if (mes === 1){
    console.log("Janeiro")
}else if (mes === 2){
    console.log("Fevereiro")
}else if (mes === 3){
    console.log("Março")
}
