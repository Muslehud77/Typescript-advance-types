{

    const createArray  = (param:string) : string[]=>{
        return [param]
    }

   const createArrayWithGeneric= <T>(params:T) : T[] =>{
    return [params]
   }

   type User = {name:string;city:string}

    const res1 = createArray("Bangladesh")

    const res2 = createArrayWithGeneric<boolean>(true)
    const res3 = createArrayWithGeneric<string>("bangladesh")
    const res4 = createArrayWithGeneric<User>({
      name: "Musleh",
      city: "Chittagong",
    });




    const createArrayTuple = (param: string): string[] => {
      return [param];
    };

    // type genericTuple = <T,X>(param1:T,param2:X) => [T,X] //Confused about how to use it

    const createArrayTupleWithGeneric = <T,X>(param1: T,param2:X): [T,X] => {
      return [param1,param2];
    };

    type User1 = { name: string; city: string };

    const res1T = createArray("Bangladesh");

    const res2T = createArrayTupleWithGeneric<boolean,string>(true,"hello");
    const res3T = createArrayTupleWithGeneric<string,number>("bangladesh",420);
    const res4T = createArrayTupleWithGeneric<User,number>({
      name: "Musleh",
      city: "Chittagong",
    },112);

    const addCourseToStudent = <T>(student:T) =>{
        const course = 'Next level Web Development'

        return {
            ...student,course
        }
    }

    const student = addCourseToStudent({name:"X",email:"hello@hello.com",devType:"NextLevel"})
    const student2 = addCourseToStudent({name:"Y",email:"hello@hello.com",hasWatch:"NextLevel"})


}