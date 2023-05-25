// ?  kich => check key => check a specific key type  exist or not   exist in a object type 

interface College {
  name: string;
  established: number;
  student: number;
}

type CollegeKeys = keyof College;




