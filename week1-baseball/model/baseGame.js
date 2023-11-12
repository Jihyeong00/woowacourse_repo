import { Console } from '@woowacourse/mission-utils';

class BaseGame {
    #winningNumber;

    constructor(number) {
        this.#validation(Number(number));
        this.#winningNumber = number;
    }

    #validation(inputNumber) {
        this.#isNumber(inputNumber);
        this.#isDuplication(inputNumber);
    }

    #isNumber(number) {
        const regExp = /^[0-9]{3}/g;
        if (!regExp.test(number)) throw new Error('[ERROR] 숫자가 아닌 잘못된 수를 입력하였습니다.');
    }

    #isDuplication(number) {
        const number_array = String(number).split('');
        if (new Set(number_array).size !== number_array.length) throw new Error('[ERROR] 중복된 수를 입력하였습니다.');
    }

    #isAllStrike(inputNumber) {
        return this.#winningNumber == inputNumber;
    }

    #isStrike(inputNumber, index) {
        return this.#winningNumber[index] == inputNumber;
    }

    #isBall(inputNumber) {
        return String(this.#winningNumber).split("").includes(inputNumber);
    }

    #checkGameNumber(strikeCount, ballCount) {
        let result = '';
        if (!strikeCount && !ballCount) {
            result = `낫싱`;
        }
        if (strikeCount && !ballCount) {
            result = `${strikeCount}스트라이크`;
        }
        if (!strikeCount && ballCount) {
            result = `${ballCount}볼`;
        }
        if (strikeCount && ballCount) {
            result = `${ballCount}볼 ${strikeCount}스트라이크`;
        }
        return result;
    }

    getCheckResult(inputNumber) {
        let strikeCount = 0;
        let ballCount = 0;
        this.#validation(inputNumber);
        if (this.#isAllStrike(inputNumber)) return '3스트라이크';
        inputNumber.split("").forEach((value, index) => {
            if (this.#isStrike(value, index)) {
                strikeCount++;
            } else if (this.#isBall(value)) {
                ballCount++;
            }
        });
        const result = this.#checkGameNumber(strikeCount, ballCount);
        return result;
    }
}

export default BaseGame;
