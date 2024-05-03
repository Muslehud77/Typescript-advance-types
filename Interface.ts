{
    // interface

    type User1 = {
        name: string;
        age: number
    }
      interface User2  {
        name: string;
        age: number
    }

    type userWithRole1 = User1 & {role : string}
    interface UserWithRole2 extends userWithRole1{
        // role : string;
        address: string
    }

    const user1: UserWithRole2 = {
        name: 'musleh',
        age:100,
        role : 'frontend dev',
        address : ""
    }

    // js --> object , array --> object, function --> object

    type Roll1 = number[]

    interface Roll2 {
        [index : number] : number
    }

    const rollNumber1 : Roll2  = [1,2,3]
      

    // type Add = (num1:number,num2:number) => number
    interface Add {
        (num1:number,num2:number):number
    }

    const add : Add= (num1,num2)=> num1+num2


}