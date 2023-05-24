// !n! asynchronus ts 
interface char_info {
    name: string;
    value: number, 
    is_married:boolean,
}
// !n! must return :promis<type> // type are number, string, boolean, void etc
let create_promise = ():Promise<char_info> =>{
    return new Promise <char_info>((s, j)=>{
        const data = {
            name:'ismail', 
            value:100, 
            is_married:false,
        }

        if(data){
            s(data)
        }
        else{
            j('error')
        }
    })
}

const promise_res = async():Promise<void>=>{
    const data = await create_promise()
    console.log(data, '"data"')
}


interface comment{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
    is_sala:false
}
console.log('shah')
const get_comment =async ():Promise<comment> =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response, '"res"')
    return await response.json();
}

const print_comment = async() =>{
    const comment = await get_comment()
    console.log(comment, "'comment'")
}

print_comment()