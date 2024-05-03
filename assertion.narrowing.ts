{
    // type assertion
    let anything : any;

    anything = "Next Level Web Development";

    anything = 222;

    (anything as number)

    const kgToGm = (value : string | number)=>{
        if(typeof value === 'string'){
            const convertedValue = parseInt(value)*1000
            return `converted value is ${convertedValue}`
        }
        else if(typeof value === 'number'){
            return value*1000
        }
    }

    const result1 = kgToGm(1000) as number
    const result2 = kgToGm("1000") as string


    type CustomError = {
        message : string
    }

    try{

    }catch(err){
        console.log((err as CustomError).message);
    }

    console.log(result1);
    console.log(result2);

}