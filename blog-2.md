we can handle asynchronus operation by using Promise and the async/await function.like =


type OutPuttype = {
    userId : number,
    id : number,
    title : string
}
const getdataAsync = async(): Promise<OutPuttype> =>{
    const response = await fetch(URL);
    const data = await response.json();
    return await data
}

where as in Promise : 

const createingAPromise = () : Promise<type> =>{
    return new Promise<type>((resolve, reject) =>{
        let data : type
        if(data){
            resolve(data)
        }else{
            reject("failed to load the data")
        }
    })
}

this async/await is for the modern era javascript where as Promise is an older version of the javascript. nowdays, async/await operation is widely used cause it needed lesser code to write over the Promise . and it is reliable to fetchdata.async is better for debugging and error handling compare to Promise.









