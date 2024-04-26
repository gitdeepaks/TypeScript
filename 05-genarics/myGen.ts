const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any) {
  return val;
}

function identityThree<type>(val: Type): Type {
  return val;
}

// identityThree("hello")

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

// identityFour<Bottle>({});


function getSearchProducts<T>(params: T[]): T {
  // do some Db opearations
  const myIndex = 3;
  return products[myIndex];
}

interface DataBase{
    connection:string
    username:string
    password:string
}

const getMoreSearchProducts = <T,>(products:T[]):T=>{
    // do some db opeartions
    const myIndex = 4
    return products[myIndex]
}

function anotherGenerics<T, U extends DataBase>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}


// anotherGenerics(3, {})

interface Quiz {
  name: string;
  type: string;

}

interface Course {
  name: string;
  auther: string;
  subject: string;

}


class Sellable<T> {
  public cart: T[] = [];
} 