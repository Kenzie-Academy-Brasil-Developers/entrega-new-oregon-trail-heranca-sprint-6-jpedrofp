const Traveler = require("./Traveler") 


class Doctor extends Traveler {
    constructor(name,isHealthy,food) {
        super(name,isHealthy,food) 
        isHealthy = true;
        food = 1;
        this.name = name;
        this.food = food;
        this.isHealthy = isHealthy;
    }

heal(traveler){
    traveler.isHealthy == "true";
}
}

module.exports = Doctor;