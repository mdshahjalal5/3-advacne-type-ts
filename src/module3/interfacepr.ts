//!n! irex  => interface => reference type(farab) => extends =>
//!n! furab => function => array => object

interface IPerson {
  name: string;
  age: number;
  address?: string;
}

const Person: IPerson = {
  name: "John",
  age: 20,
  // address: "123 Main Street"
};

interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}

const myDog: Dog = {
  // name: 'Buddy',
  bark() {
    console.log("Woof!");
  },
};

interface IAnything extends Dog {
  age: number;
  isMarried: boolean;
}

const interfaceVariable: IAnything = {
  name: "anything",
  bark() {
    console.log("Woof!");
    return "sha";
  },
  age: 3,
  isMarried: true,
};
