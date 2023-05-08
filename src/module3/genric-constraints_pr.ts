// !n! generic constraints => fex => force => extends 

interface feature {
    name: string;
    description: string;
    type: string;
    required: boolean;
    
}
function add_features<T extends feature>(f_name:T):void{
    console.log('`feature of the phnone is', f_name)
}

const feature_info = {
    name:'3d image', 
    description:'3d image ultra booster',
    type:'image',
    required:true, 
    is_coasty:true, 
    is_available:false

} // !n! feature_info  must fulfill the up interface feature => then addition property like is_available can take
const samsung = add_features(feature_info)