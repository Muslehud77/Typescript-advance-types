{
    // asynchronous typescript

    //promise 

    type Todo = {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    };

    

    const getToDo = async() : Promise<Todo>=>{
       const response = await fetch("https://jsonplaceholder.typicode.com/todos/2")

       const data:Todo = await response.json() 
       console.log(data);
      return data
    }

    getToDo()

    type Something = {isMarried:boolean}

    const createPromise = ():Promise<Something>=>{
        return new Promise<Something>((resolve,reject)=>{
            const data :Something = {isMarried:true}
            if(data){
                resolve(data)
            }else{
                reject('failed to load data')
            }
        })
    }

    // calling create promise function

    const showData = async(): Promise<Something>=>{
        const data = await createPromise()
        console.log(data);
        return data
    }

    showData()

}