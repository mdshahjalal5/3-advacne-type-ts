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

type Math_keys = keyof TMath;

type checkMathKey<T1, T2> = T2 extends T1 ? true : false;

type is_hard = checkMathKey<"is_hard", Math_keys>;

// ?-------------------------------------------------------//----------------------------------------------------------

// ?n! remove key type from object type 

type quality = "good" | "bad" | "worst"

type remove_key<T, K> = T extends K ? never: T;

type remaining = remove_key<quality, 'good'>

// ?-------------------------------------------------------//--------------------------------------------------------

type buq = true | false | null 

type removing_key<T, K> = T extends K? never: T;

type existing = removing_key<buq, true >

