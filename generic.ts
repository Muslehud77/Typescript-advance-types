{
    //generic type

    type genericArray<T> = Array<T> // on generic type we declare the type with angle brackets
    // it acts like a func we can pass an argument and receive it


    // const rollNumbers : number[] = [3,6,8]
    const rollNumbers : genericArray<number> = [3,6,8]

    // const mentors : string[] = ['x','y','z']
    const mentors : genericArray<string> = ['x','y','z']

    // const boolArray : boolean[] = [true,false,false]
    const boolArray : genericArray<boolean> = [true,false,false]


    const user : genericArray<{name:string,age:number}> = [{
        name: 'Musleh',
        age: 100
    },
    {
        name: 'y',
        age: 110
    }
]


  //generic tuple

  type genericTuple<X,Y> = [X,Y]

  const manush: genericTuple<string,string> = ['x','y']

  const userWithId : genericTuple<number,{name:string,email:string}> = [1234,{name:'x',email:'a@a.com'}]

}