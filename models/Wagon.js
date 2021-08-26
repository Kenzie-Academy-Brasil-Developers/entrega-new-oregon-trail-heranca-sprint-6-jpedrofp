const Traveler = require("./Traveler") 

class Wagon {

    constructor(capacity, numOfPassengers, seats) {
        numOfPassengers = 0
        seats = []
        this.capacity = capacity;
        this.numOfPassengers = numOfPassengers;
        this.seats = seats
    }

    getAvailableSeatCount() { return this.capacity - this.numOfPassengers }

    join(t) {
        if (this.numOfPassengers < this.capacity) {
            this.numOfPassengers += 1
            this.seats.push(t)
            console.log(this.seats)
            console.log(`${t.name} joined the party! :)`)
        }

        else console.log("Unfortunaly there is no more space for travelers here m'an. Check again later")
    }

    shouldQuarantine() {
        for (let num in this.seats) {
            if (this.seats[num].isHealthy == false) {
                return "Should quarentine"
            }
        }
        return "No need for quarentine"
    }

    totalFood() {
        let sum = 0
        for (let num in this.seats) {
            sum += this.seats[num].food
        }
        return sum
    }

}

module.exports = Wagon;