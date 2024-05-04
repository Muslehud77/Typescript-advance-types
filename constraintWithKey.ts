{
    //generic constraint with keyof operator


    type Vehicle = {
        bike:string;
        car:string;
        ship:string
    }

    type Owner = "bike" | "car" | "ship"

    const person1 : Owner = 'ship'


    type Owner2 = keyof Vehicle

    const person2 : Owner2 = "ship"


    const getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>{
        return obj[key]
    }


    const user = {
        name: 'xyz',
        age: 26,
        address: 'ctg'
    }


    console.log(getPropertyValue(user,'address'));




    


}