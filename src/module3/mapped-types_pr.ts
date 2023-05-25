// !n! loor  => lookup => readonly
interface pc_config{
    hardware:string, 
    graphics:string, 
    readonly memory:number, 
    is_windows:boolean
}

const my_pc:pc_config = { 
    hardware:"MacBook Pro", 
    graphics:'mesa intel', 
    memory:2048, 
    is_windows:true
}
// !n! look up 
type hardware = pc_config["graphics"]
// !if not readonly can modify
my_pc.graphics = 'changed mes';
// !n! can't modified cause it's readonly type
// my_pc.memory = 33; // ! [ts] Cannot assign to 'memory' because it is a read-only property.

// ------------------/// -------------------// 

interface phone_config  {
    name:string, 
    storage:number, 
    is_android:boolean, 
    // price:unknown, 
    // color:any
}

type phone_name = phone_config["name"]

type phone_name2 = phone_config["storage"]

type is_android = phone_config["is_android"]


// ?-----------------------------------------//----------------------------------------------------------------


// !n! in operator 
type phone2 = {
    [key_anything in 'name'|'color'] :string  // !n! take name & color  and generate type 
}

type Area2<T> = {
    [key in keyof T] : T[key]
}



const phone3:Area2<phone_config> = {
    name: 'Samsung', 
    storage: 1000, 
    is_android: true, 
    // price: 1000, 
    // color: 'blue'
}
console.log('"fs h"')