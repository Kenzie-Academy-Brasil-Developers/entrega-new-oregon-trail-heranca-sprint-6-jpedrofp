function animalsToHunt() {
    let random = Math.floor(Math.random() * (5 - 0) + 0);
    let animals = "chicken, cow, fish, pig, rabbit"
    let animal = animals.split(", ")
    return animal[random]
}

function diseases() {
    let random = Math.floor(Math.random() * (5 - 0) + 0);
    let listOfDiseases = "Hepatitis, a flue, Tuberculosis, Diarrhea, Malaria"
    let String = listOfDiseases.split(", ")
    return String[random]
}

function cookingMethods() {
    let random = Math.floor(Math.random() * (5 - 0) + 0);
    let cookingMethods = "fried, raw, baked, salty, spicy, "
    let methods = cookingMethods.split(", ")
    return methods[random]
}

function fruits() {
let random = Math.floor(Math.random() * (5 - 0) + 0);
let fruitsList = "apples, bananas, oragens, strawberries, blueberrys, "
let fruits = fruitsList.split(", ")
return fruits[random]
}

