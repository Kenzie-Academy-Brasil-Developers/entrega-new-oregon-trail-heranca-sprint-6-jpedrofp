class Doctor extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)  
        this.name = name;
        this.food = food;
        this.isHealthy = isHealthy;
    }

heal(traveler){
    traveler.isHealthy == "true"
}
}

// module.exports = Doctor;