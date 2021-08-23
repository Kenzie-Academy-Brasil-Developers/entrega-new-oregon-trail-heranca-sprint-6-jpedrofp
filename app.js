const Traveler  = require("./models/Traveler");
const Wagon     = require("./models/Wagon");
const Doctor    = require("./models/Doctor");
const Hunter    = require("./models/Hunter");


let viajante = new Traveler();
let carroca = new Wagon();
let medico = new Doctor();
let cacador = new Hunter();

let viajanteSergio = new Traveler();
let viajanteSimone = new Traveler();
let viajanteSamuel = new Traveler();
let viajanteSandra = new Traveler();
let viajanteJoão   = new Traveler();
let viajanteDiego  = new Traveler();
let viajanteDiana  = new Traveler();

let medicoSusy = new Doctor();
let medicoMicael = new Doctor();

let cacadorPaulo = new Hunter();
let cacadorBarney = new Hunter();

module.exports = {
    viajante,
    carroca,
    medico,
    cacador,

}