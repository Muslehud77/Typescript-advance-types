{

    // interface generic

    interface Developer<T,B=null> {
        name:string;
        computer:{
            brand:string;
            model:string;
            release: number
        };
        smartWatch: T;
        bike?:B
    }

    type Mi = { brand: string; model: string; display: string };

    type Apple = { brand: string};

    type Bike = {brand:string;engine:string}



    const poorDeveloper :Developer<Mi> = {
        name: 'Musleh',
        computer:{
            brand:"Asus",
            model: "Rog",
            release:2020
        },
        smartWatch: {
            brand: "Mi",
            model:"120",
            display : "OLED"
        }
    }


    const richDeveloper: Developer<Apple,Bike> = {
      name: "Persian",
      computer: {
        brand: "Asus",
        model: "Rog",
        release: 2020,
      },
      smartWatch: {
        brand: "Apple",
      },
      bike:{
        brand:'bajaj',
        engine:'160cc'
      }
    };



}