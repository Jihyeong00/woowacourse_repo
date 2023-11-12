import { Console } from '@woowacourse/mission-utils';

export const OutputView = {
    startGame: () => Console.print('숫자 야구게임을 시작합니다.'),
    errorPrint: () => Console.print('숫자를 입력해주세요 : \n'),
    endGame: () => Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료'),
};
