{

    const arrOfNumbers : number[] = [1,4,5]

    // const arrOfStrings : string[] = ['1','4','5']

    const arrOfStrings : string[] = arrOfNumbers.map((n : number)=>n.toString())

    console.log(arrOfStrings);




    type AreaNumber = {
        height: number;
        width: number;
    }

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    type Height = AreaNumber["height"] // lookup type


    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString<{height:number;width:string}> = {
        height: 100,width:'100'
    }




    
}