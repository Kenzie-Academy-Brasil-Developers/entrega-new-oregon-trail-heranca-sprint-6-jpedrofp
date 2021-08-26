class Traveler {

    constructor(name,isHealthy,food) {
        isHealthy = true;
        food = 1;
        this.name = name;
        this.food = food;
        this.isHealthy = isHealthy;
    }

    hunt() {
        let bagOfFood = "";
        bagOfFood += animalsToHunt();
        this.bagOfFood = bagOfFood
        this.food += 2;
        console.log(`${this.name} hunted a ${bagOfFood} and now has ${this.food} food`)
    }

    eat() {
        let bagOfFood2 = this.bagOfFood;

        if (`${this.food}` > 0 && bagOfFood2 == undefined) {
            this.food -= 1
            console.log(`${this.name} ate a few bananas and now has ${this.food} food`)
        }
        else if (`${this.food}` > 0) {
            this.food -= 1
            console.log(`${this.name} ate a piece of ${cookingMethods()} ${bagOfFood2} and now carries ${this.food} amount of food`)
        }
        else {
            this.isHealthy = false
            console.log(`${this.name} couldn't find anything to eat and now its sick with ${diseases()}`)
        };
    }
}


module.exports = Traveler ;