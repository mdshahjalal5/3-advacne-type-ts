const picnic_arrange = <T1, T2>(p1: T1, p2: T2) => {
  return {
    ...p1,
    gurdian: `my Gurdian is${p2}`,
  };
};

const picnic = picnic_arrange<object, string>(
  { name: "david", age: 39 },
  "Kamruzzaman",
);
console.log(picnic);

// ?----------------------------------//------------------------------//--------------------------------
