// ?  kich => check key => check a specific key type  exist or not   exist in a object type 
// ? kig => keyof> generic> 
interface College {
  name: string;
  established: number;
  student: number;
}

// ? keyof 
type CollegeKeys = keyof College;

// ? generic  
type check_key<x,y> = y extends CollegeKeys ? true : false;

type check_teacher = check_key<string,"teacher">




// ? ------------------------------------------//--------------------------------------------------------

type TMath = {
    name:string, 
    type:string;
    page:number;
}




