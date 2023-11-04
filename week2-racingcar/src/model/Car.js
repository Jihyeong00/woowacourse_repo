import { Console } from "@woowacourse/mission-utils";
class Car {
    constructor(carName) {
        this.carName = carName;
        this.position = 0;
    }
    getCarName() {
        return this.carName;
    }

    getPosition() {
        return this.position;
    }

    move(isMove) {
        if(isMove){
            this.position += 1;
        }
        Console.print(this.getCarName() + " : " +  "-".repeat(this.position))
    }
}

export default Car;
