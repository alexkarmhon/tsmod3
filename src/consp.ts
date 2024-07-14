// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number;
// }

// const greeter = (person: Person): void => {
//   console.log(`Hello, ${person.firstName} ${person.lastName}`);
// };

// const john: Person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// greeter(john);
// ....................................................................
// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// const user: IPerson = {
//   name: "Alex",
//   age: 35,
//   greet(phrase) {
//     console.log(`${phrase}, ${this.name}`);
//   },
// };

// user.greet('Hello! Im ')
// ....................................................................
import { IPerson, IPilot } from "./type";
class Person implements IPerson {
  name?: string;
  constructor(public age: number) {}
  setName(n: string) {
    this.name = n;
  }
}

class Pilot implements IPerson, IPilot {
  constructor(public name: string, public age: number) {
    if (this.age < 28) {
      throw new Error("Pilot too young");
    }
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }

  flyMessage(): void {
    console.log("Plane is fligh");
  }

  setAutopilot(): void {
    console.log("Autopilot is on");
  }
}

class Terrorist implements IPilot {
  bluff(phrase: string): void {
    console.log(phrase);
  }
  flyMessage(): void {
    console.log("We are want 9 millions dollars");
  }
}

// const pilot = new Pilot("Anthony", 32);
// pilot.greet("My name is ");
// pilot.flyMessage();
// pilot.setAutopilot();

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }
  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
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
