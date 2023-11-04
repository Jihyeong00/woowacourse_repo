import RACING from "../constants/message.js"
import {MissionUtils} from "@woowacourse/mission-utils";
import {GAME_SETTING} from "../constants/game.js";
import {namesDuplicationValidation, namesLengthValidation, nameValidation, numberValidation} from "./validation.js";

/**
 *
 * @param {*} names
 * 1. 5글자 이하인 이름들의 배열을 받아옵니다.
 * 2. 중복된 이름이 없는지 검사합니다.
 */
export const checkName = (names) => {
    nameValidation.lengthCheck(names)
    nameValidation.duplicationCheck(names)
}

/**
 *
 * @param {*} number
 * 1. 전달 받은 값이 숫자인지 확인합니다.
 * 2. 전달 받은 값이 정수인지 확인합니다.
 * 2. 전달 받은 값이 0 또는 음수인지 확인합니다.
 */
export const checkNumber = (number) => {
    numberValidation.numberCheck(number)
    numberValidation.integerCheck(number)
    numberValidation.negativeCheck(number)
}

/**
 *
 * @returns {boolean} 움직여도 되는지 리턴해줍니다.
 */
export const checkIsMove = () => {
    return MissionUtils.Random.pickNumberInRange(GAME_SETTING.range_start, GAME_SETTING.range_end) >= GAME_SETTING.pass_number
}