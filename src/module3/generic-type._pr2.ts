type genArray<x, y> = {
  name: x;
  readonly age: y;
};

const intro: genArray<string, number> = {
  name: "shahjalal",
  age: 20,
};

// intro["age"] = 50 //? [ts] Cannot assign to 'age' because it is a read-only property.
console.log(intro);

console.table(intro);

//? ----------------------// ----------------------// ----------------------// ----------------------// ----------------------//

interface Property9 {
  name: string;
  age: number;
}

type Property<x, y, z> = [x, y, z];

const ami: Property<Property9, string, boolean> = [
  { name: "sha", age: 36 },
  "shahjala",
  true,
];

// ?-------------------------------------------// --------------------------------

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

function lastElemeent<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

const res = <string>lastElemeent(["ismail"]);

console.log(res);

// ?-----------------------------------//--------------------------------------------------------// --------------------

type generic_arr<T> = Array<T>;

interface subject {
  name: string;
  weight: number;
  is_costy: boolean;
}

const subject_arr: generic_arr<subject> = [
  {
    is_costy: true,
    weight: 3,
    name: "bangla",
  },

  {
    name: "math",
    weight: 5,
    is_costy: false,
  },
  {
    name: "English",
    weight: 8,
    is_costy: true,
  },
];

// ? ------------------------------------------------------------------------------------//---------------------------------------

type age = Pick<Property9, "age">; // ? pick age from property9

type makeArray<A> = A[]; // Array<A>

interface IStudent extends subject {
  price: number;
  age: age;
}

const student33: makeArray<IStudent> = [
  {
    age: {
      age: 3,
    },
    name: "iya",
    is_costy: false,
    price: 33,
    weight: 5,
  },
];
console.log(student33);
