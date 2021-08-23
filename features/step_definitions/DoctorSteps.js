const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");


const { medico } = require("./../../app");

/** GIVEN */

Given('um Traveler de nome {string}', function (string) {
    medico.name = string;
});

Given('ele sempre começa a viagem com {int} refeição', function (int) {
    medico.food = int;
});

Given('ele sempre começa a viagem saudável.', function () {
    medico.isHealthy = true;
});

/** WHEN */

When('o Doctor sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        medico.hunt();
    }
});

When('o Doctor parar para comer {int} vezes', function (int) {
    for (let contador=0; contador < int; contador++) {
        viajante.eat();
    }
});

/** THEN */

Then('a quantidade de refeições deve ser igual a {int}', function (int) {
    assert.strictEqual(viajante.food, int);
});

Then('o Doctor não ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, true)
});

Then('o Doctor ficará doente', function () {
    assert.strictEqual(viajante.isHealthy, false)
});