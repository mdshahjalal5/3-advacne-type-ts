// type NoobDeveloper = {
//   name: string;
// };

// // type JuniorDeveloper = {
// //   name: string;
// //   expertise: string;
// //   experience: number;
// // };

// type JuniorDeveloper = NoobDeveloper & {
//   expertise: string;
//   experience: number;
// };

// type NextLevelDeveloper = JuniorDeveloper & {
//   leadershipExperience: number;
//   level: "junior" | "mid" | "senior";
// };

// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//   name: "Moznu Mia",
//   expertise: "Javascript",
//   experience: 1,
// };

// const developer: NextLevelDeveloper = {
//   name: "Next Bhai",
//   expertise: "Typescript",
//   experience: 2,
//   leadershipExperience: 1,
//   level: "senior",
// };


interface father {
    name: string;
    age: number;
    is_good: boolean;
}

type mother = father &{
    is_beautiful: boolean;
}

const my_childs_mother:mother = {
    name: 'bou',
    age:18,
    is_beautiful: false, 
    is_good: false
}

console.log(my_childs_mother);
