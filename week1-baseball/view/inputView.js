import {Console} from "@woowacourse/mission-utils"

export const InputView = {
    readInputNumber : ()=>Console.readLineAsync("숫자를 입력해주세요 : \n"),
    retryGame : ()=>Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n")
}