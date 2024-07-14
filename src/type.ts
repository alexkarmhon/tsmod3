interface IPerson {
  name?: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

// interface IPilot extends IPerson {
//   flyMessage(): void;
// }

export { IPerson, IPilot };
