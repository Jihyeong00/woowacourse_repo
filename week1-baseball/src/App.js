import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "../constants/messages";

class App {
    async play() {
        Console.print(GAME_MESSAGE.START)
        let isOut = false

        function randomNumberMaker() {
            const randomNumberArray = [];
            while (randomNumberArray.length < 3) {
                const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!randomNumberArray.includes(randomNumber)) {
                    randomNumberArray.push(randomNumber);
                }
            }
            return randomNumberArray.join('');
        }

        function validation(number) {
            if (isNaN(Number(number))) throw new Error(ERROR_MESSAGE.TYPE);
            if (number.length !== 3) throw new Error(ERROR_MESSAGE.LENGTH);
            if (number[0] === number[1] || number[1] === number[2] || number[2] === number[0]) throw new Error(ERROR_MESSAGE.DUPLICATION);
        }

        function baseGame(randomNumber, pickNumber) {
            let strikeCount = 0;
            let ballCount = 0;

            if (randomNumber === pickNumber) {
                isOut = true;
                return GAME_MESSAGE.ALERT_STRIKE(3)
            }


            for (let i = 0; i < pickNumber.length; i++) {
                if (randomNumber.includes(pickNumber[i])) {
                    randomNumber[i] === (pickNumber[i]) ? strikeCount++ : ballCount++;
                }
            }

            if (!strikeCount && !ballCount) return GAME_MESSAGE.ALERT_NOT;
            if (!strikeCount && ballCount) return GAME_MESSAGE.ALERT_BALL(ballCount);
            if (strikeCount && !ballCount) return GAME_MESSAGE.ALERT_STRIKE(strikeCount);

            return GAME_MESSAGE.ALERT_BOTH(ballCount, strikeCount)
        }

        const randomNumber = randomNumberMaker();

        while (!isOut) {
            const pickNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT_COUNT)
            validation(pickNumber);
            Console.print(baseGame(randomNumber, pickNumber));
        }

        Console.print(GAME_MESSAGE.END)

        if (await Console.readLineAsync(GAME_MESSAGE.RE_GAME) === '1') await this.play();
    }
}

export default App;