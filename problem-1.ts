
{

    type SumofNumbers = (params: number[]) => void;
    const sumArray: SumofNumbers = (params) => {
        let sum: number = 0
        params.forEach((element, idx) => {
            sum += params[idx]
        })
        console.log(sum)
    }


}
