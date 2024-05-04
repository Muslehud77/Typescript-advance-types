{

    //conditional type

    type a1 = number

    type b1 = string

    type x = a1 extends null ? true : false // if a1 extends to null in other word if a1 is null it will return true
    
     type y = a1 extends null ? true : b1 extends undefined ? undefined : any; 


     type sheikh = {
        bike:string;
        car:string;
        ship:string;
        plane: string
     }

     //car / bike / ship / tractor
     type CheckVehicle<T> = T extends keyof sheikh ? true : false

     type HasBike = CheckVehicle<"bike">
     type HasTractor = CheckVehicle<"tractor">
}