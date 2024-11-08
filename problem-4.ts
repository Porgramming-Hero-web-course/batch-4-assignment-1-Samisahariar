
{



    type CircleOrRec = Circle | Rectangle;
    type Circle = {
        shape: "circle";
        radius: number
    }
    type Rectangle = {
        shape: "rectangle";
        height: number;
        width: number;
    }
    const calculateShapeArea = (params: CircleOrRec): number => {

        if (params.shape === "circle") {
            return parseFloat((Math.PI * params.radius * params.radius).toFixed(2))
        } else if (params.shape === "rectangle") {
            return parseFloat((params.width * params.height).toFixed(2))
        } else {
            return 0
        }
    }





}

