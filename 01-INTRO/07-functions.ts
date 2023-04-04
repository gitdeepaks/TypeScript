function addTwo(num: number): number {
   
    return num +2;
    // return 'hello';
}

function getUpper(val:string) {
    return val.toUpperCase();
}

function signUp(name: string,email:string,isPaid:boolean) {
    
}

const loginUser = (name:string, email:string, isPaid:boolean) => {

}

loginUser("h", "h@h.com", false)

let myVal = addTwo(5)
getUpper("4")
signUp("deepak","deepak@lco.dev",false)



// function getVal(muVal:number): boolean {
//     if (myVal >5) {
//         return true;
//     }
    
//     return "200 OK"
// }


const getHello  = (s:String): string => {
    return ""
}


const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero):string => {
    return  `hero is ${hero}`
})


function consoleError(error:string): void {
    console.log(error);
}
function handleError(error:string): void {
    throw new Error(error);
    
}

export {}