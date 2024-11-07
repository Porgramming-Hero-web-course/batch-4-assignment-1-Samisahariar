{


    class Car {
        make: string
        model: string
        year: number
        constructor(make: string, model: string, year: number) {
            this.make = make
            this.model = model
            this.year = year
        }

        getCarAge() {
            console.log(2024 - this.year)
        }

    }

    


}