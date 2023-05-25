//  !n! key u(kiu) => key of union(|)

interface identity9{
    name:string, 
    age:number, 
    gender:string,
    address:string, 
    is_married:true
}

type key_of_identity9 = keyof identity9;  // !n! 

const key:key_of_identity9 = "address"  


const get_value = <x, y extends keyof x>(p1:x, p2:y)=>{
    return p1[p2]
}

const info = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    address: "123 Main Street",
    is_married: true
}
const value = get_value(info, "gender")
console.log(value, '"value"');
