

{


    const countWordOccurrences = (param: string, matchWord: string) => {
        const paramsArray = param.split(" ");
        const arrayresult: number[] = []
        paramsArray.forEach(element => {
            if (element.toLowerCase() === matchWord.toLowerCase()) {
                arrayresult.push(1)
            } else {
                arrayresult.push(0)
            }
        })
        console.log(arrayresult.reduce((prev, curr) => prev + curr, 0))
    }










}




