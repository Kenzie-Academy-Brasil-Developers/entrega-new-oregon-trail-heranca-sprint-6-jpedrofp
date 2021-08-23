const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");


const { cacador } = require("./../../app");

/** GIVEN */

Given('um Cacador de nome {string}', function (string) {
    cacador.name = string;
});

Given('ele sempre começa a viagem com {int} refeição', function (int) {
    cacador.food = int;
});

Given('ele sempre começa a viagem saudável.', function () {
    cacador.isHealthy = true;
});

/** WHEN */

When('o Cacador sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('o Cacador parar para comer {int} vezes', function (int) {
    for (let contador=0; contador < int; contador++) {
        cacador.eat();
    }
});

/** THEN */

Then('a quantidade de refeições deve ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int);
});

Then('o Cacador não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, true)
});

Then('o Cacador ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, false)
});