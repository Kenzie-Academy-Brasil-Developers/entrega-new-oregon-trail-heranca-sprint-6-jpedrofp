const Traveler = require("./Traveler") 

class Hunter extends Traveler {
    constructor(name,isHealthy,food) {
        super(name, isHealthy,food)
        isHealthy = true;
        food = 2;   
        this.name = name;
        this.food = food;
        this.isHealthy = isHealthy;
    }

    hunt() {
        let bagOfFood = "";
        bagOfFood += animalsToHunt();
        this.bagOfFood = bagOfFood
        this.food += 5;
        console.log(`${this.name} hunted a ${bagOfFood} and now has ${this.food} units of food`);
    }

    eat() {
        let bagOfFood2 = this.bagOfFood;

        if (`${this.food}` > 0 && bagOfFood2 == undefined) {
            this.food -= 2;
            console.log(`${this.name} ate a few ${fruits()} and now has ${this.food} units of food`);
        }
        else if (`${this.food}` == 1) {
            this.food -= 1;
            console.log(`${this .name} ate a piece of ${cookingMethods()} ${bagOfFood2} and now carries ${this.food} units of food`);
        }
        else if (`${this.food}` > 0) {
            this.food -= 2;
            console.log(`${this.name} ate a piece of ${cookingMethods()} ${bagOfFood2} and now carries ${this.food} units of food`);
        }
        else {
            this.isHealthy = false;
            console.log(`${this.name} couldn't find anything to eat and now its sick with ${diseases()}`);
        };
    }
    
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits){
        this.food -= numOfFoodUnits;
        traveler.food += numOfFoodUnits;
        console.log(`${this.name} gave ${numOfFoodUnits} units of food to ${traveler.name}`);
        }
        else console.log(`${this.name} doesnt have ${numOfFoodUnits} units of food to give.`)
    }

}

module.exports = Hunter;