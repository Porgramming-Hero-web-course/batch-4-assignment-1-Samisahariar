-------------------Blog-2--------------------
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

From this getdataAsync function we can wait untill the is not received from the sever .if we dont not use the async/await the function will run through without waiting data to receive . and the promise determines there is something data to receive from this function. for asynchronus operation we should use the async/await and the promise . 









