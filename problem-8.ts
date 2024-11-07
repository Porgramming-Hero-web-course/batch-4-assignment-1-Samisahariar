{



    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
        for (let index = 0; index < keys.length; index++) {
            const element = keys[index];
            if (!(element in obj)) {
                return false
            }
        }
        return true
    }





}