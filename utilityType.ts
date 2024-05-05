{

    // utility types
    // *pick

    type Person = {
        name: string;
        age: number;
        email? : string;
        contactNo : number
    }

    type NameAge = Pick<Person,'name'| 'age'>

    // *Omit
    
    type ContactInfo = Omit<Person,"name"|"age">

    // *Required

    type PersonRequired = Required<Person>

    // *Partial

    type PersonPartial = Partial<Person>

    // *ReadOnly

    type ReadOnlyPerson = Readonly<Person> 

    const person1: ReadOnlyPerson = { name: "X", age: 20, contactNo: 9898989 }; 

    // person1.name = "Y" //cant reassign because the type is readonly 

    // *Record

    // type MyObj = {
    //     a:string,
    //     b:string
    // }

    type MyObj = Record<string,string>

    const emptyObj : Record<string,unknown> = {}


    const obj1 : MyObj = {
        a:'a',b:'b',c:"c"
    }

}