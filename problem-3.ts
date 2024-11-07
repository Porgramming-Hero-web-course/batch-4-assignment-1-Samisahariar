

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
        if (arrayresult.indexOf(1) !== -1) {
            console.log(1)
        } else {
            console.log(0)
        }
    }










}




