//!n! irex  => interface => reference type(farab) => extends =>
//!n! furab => function => array => object

// ? In TypeScript, the extends keyword is used in interface declarations to create a new interface that extends an existing interface. When one interface extends another, it inherits all the properties and methods of the base interface, and can define its own additional properties and methods.

interface school {
    name:string
    established:boolean, 
    is_costy:boolean, 
}

interface school_full_details extends school{
head_master:string, 
contact:number, 
teachers_number:number, 
}

const our_school:school_full_details = {
    name: "Bhawal", 
    established: false, 
    is_costy: false, 
    head_master: "Bhawal", 
    contact: 19, 
    teachers_number:40
}

console.table(our_school);
