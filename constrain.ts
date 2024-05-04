{
    //constrains

     const addCourseToStudent = <T extends {id:number,name:string,email:string}>(student: T) => {
       const course = "Next level Web Development";

       return {
         ...student,
         course,
       };
     };

     const student = addCourseToStudent({
        id:100,
       name: "X",
       email: "hello@hello.com",
       devType: "NextLevel",
     });
     const student2 = addCourseToStudent({
        id:200,
       name: "Y",
       email: "hello@hello.com",
       hasWatch: "Yes",
     });

     const student3 = addCourseToStudent({ id:333,name:'hae',email:'haehae@hae.com',emni:'emni'})

}