let numberOfcars = 0;
let distance = 0;


function getUserInput() {
    do {
        numberOfcars = +prompt('Enter amount of cars to race', 5);
    } while (!isPositiveInteger(numberOfcars));

    do {
        distance = +prompt('Enter distance to cover', 100);
    } while (!isPositiveInteger(distance));
}

function isPositiveInteger(input) {
    return Number.isInteger(input) && input > 0;
}

class Car {
    constructor(id) {
        this.id = id;
        this.distance = 0;
        this.speed = 0; 

    }
    accelerate(howMuch) {
        this.speed += howMuch;   
    }
    slowDown(howMuch) {
        this.speed -= howMuch;
        if (this.speed < 0) this.speed = 0;
        
    }
    move() {
        this.distance += this.speed;
    }
}


getUserInput();


