// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number;
// }
class Person {
    constructor(age) {
        this.age = age;
    }
    setName(n) {
        this.name = n;
    }
}
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (this.age < 28) {
            throw new Error("Pilot too young");
        }
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
    flyMessage() {
        console.log("Plane is fligh");
    }
    setAutopilot() {
        console.log("Autopilot is on");
    }
}
class Terrorist {
    bluff(phrase) {
        console.log(phrase);
    }
    flyMessage() {
        console.log("We are want 9 millions dollars");
    }
}
// const pilot = new Pilot("Anthony", 32);
// pilot.greet("My name is ");
// pilot.flyMessage();
// pilot.setAutopilot();
class Plane {
    sitInPlane(pilot) {
        this.pilot = pilot;
    }
}
class Boeing extends Plane {
    startEngine() {
        if (!this.pilot) {
            throw new Error("No pilot in cabin");
        }
        console.log("Starting engine");
        this.pilot.flyMessage();
        return true;
    }
}
const boeing = new Boeing();
// const pilot = new Pilot("Tony", 32);
const pilot = new Terrorist();
// pilot.greet("You are greeted by the captain of the plane ");
pilot.bluff("We are cons");
boeing.sitInPlane(pilot);
boeing.startEngine();
export {};
//# sourceMappingURL=consp.js.map