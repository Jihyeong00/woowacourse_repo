import Car from "../model/Car.js";
import {checkName, checkNumber, checkIsMove} from "../util/check.js";
import {Console} from "@woowacourse/mission-utils";
import RACING from "../constants/message.js";

class RacingGameController {
    constructor() {
        this.cars = []
    }

    static async getCarsName() {
        const stringCarName = await Console.readLineAsync(RACING.NAMING_GUIDE)
        return stringCarName.split(',')
    }

    static validationCarsName(cars) {
        checkName(cars)
    }

    static setCarsName(cars) {
        let newCar = []
        cars.forEach(v => newCar.push(new Car(v)))
        this.cars = newCar
    }

    static getCars() {
        return this.cars
    }

    static async getMoveCount() {
        return Number(await Console.readLineAsync(RACING.QUESTION_COUNT))
    }

    static validationCount(moveCount) {
        checkNumber(moveCount)
    }

    static printStartMessage() {
        Console.print(RACING.GAME_RESULT)
    }

    static printEndMessage(winner) {
        let winnerName = winner.join(', ')
        console.log()
        Console.print(RACING.END_GAME + winnerName)
    }

    static moveCar(cars) {
        for (let i = 0; i < cars.length; i++) {
            cars[i].move(checkIsMove())
        }
    }

    static moveCars(cars, moveCount) {
        for(let i = 0; i < moveCount ; i++){
            this.moveCar(cars)
        }
        Console.print("\n")
    }

    static getWinner(cars) {
        const winner_count = Math.max(...cars.map(car => car.getPosition()))
        return cars.filter(car => car.getPosition() === winner_count).map(car => car.getCarName())
    }

    static async play() {
        this.printStartMessage();
        let inputCar = await this.getCarsName();
        this.validationCarsName(inputCar)
        this.setCarsName(inputCar)

        let moveCount = await this.getMoveCount();
        this.validationCount(moveCount);

        const cars = this.getCars()
        this.moveCars(cars, moveCount);
        let winner = this.getWinner(cars)
        this.printEndMessage(winner)
    }
}

export default RacingGameController
