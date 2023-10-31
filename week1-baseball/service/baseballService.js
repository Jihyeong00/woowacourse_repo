import { Console } from "@woowacourse/mission-utils";
import randomNumberMaker from "../util/randomNumberMaker";
import { ERROR_MESSAGE, GAME_MESSAGE } from "../constants/messages.js"

export const validation = (number) => {
    if (isNaN(Number(number))) throw new Error(ERROR_MESSAGE.TYPE);
    if (number.length !== 3) throw new Error(ERROR_MESSAGE.LENGTH);
    if (number[0] === number[1] || number[1] === number[2] || number[2] === number[0]) throw new Error(ERROR_MESSAGE.DUPLICATION);
}

export const checkNumber = (randomNumber, pickNumber) => {
    let ballCount = 0;
    let strikeCount = 0;
    if (randomNumber === pickNumber) {
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

export const playGame = async () => {
    const randomNumber = randomNumberMaker();

    while (true) {
        const pickNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT_COUNT)

        validation(pickNumber);

        Console.print(checkNumber(randomNumber, pickNumber));
        if (checkNumber(randomNumber, pickNumber) === GAME_MESSAGE.ALERT_STRIKE(3)) break;
    }

    Console.print(GAME_MESSAGE.END)


    if (await Console.readLineAsync(GAME_MESSAGE.RE_GAME) === '1') playGame();

}