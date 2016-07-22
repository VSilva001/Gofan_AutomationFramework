/**
 * Created by victorsilva on 6/20/16.
 */

class Utils {

    engineType:number;

    constructor(engine:number) {
        this.engineType = engine;
    }

    public fac(num:number) {


        if (num == 0 || num == 1) {
            return 1;
        }

        return num * this.fac(num - 1);
    }
}

class Cars extends Utils {

}

class Car {
    engine:string = '';

    constructor(engine:string) {
        this.engine = engine;
    }

    public Start() {
        alert('Engine started:' + this.engine);
    }

    public  Stop() {
        alert('Engine stopped:' + this.engine);
    }
}
