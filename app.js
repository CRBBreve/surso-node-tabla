
// const { demandOption, argv, option } = require("yargs");
// const { option } = require("yargs");
const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");



console.clear();

// const [ , , arg3 ="base=5"] = process.argv;
// const [, base=5] = arg3.split("=");

// const base = 13;

crearArchivo(argv.b, argv.l, argv.h) 
    .then(nombreArchivo => console.log(nombreArchivo, "creada"))
    .catch(err => console.log(err));



