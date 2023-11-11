import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';
import CheckManager from '../model/CheckManager.js';

const outputView = {
  printPublishLotto: (publishLottos) => {
    publishLottos.forEach((publishLotto) =>
      Console.print('[' + publishLotto.join(', ') + ']'),
    );
  },

  printResult: (ranks) => {
    Console.print(MESSAGE.BOARD.result);
    Array.from({ length: 5 }).forEach((_, i) => {
      Console.print(
        MESSAGE.BOARD[`${i + 1}th`](ranks.filter((v) => v === i + 1).length),
      );
    });
  },

  printRevenue(ranks) {
    Console.print(
      MESSAGE.BOARD.revenue(
        CheckManager.getRevenue(
          ranks.length,
          CheckManager.getTotalReword(ranks),
        ),
      ),
    );
  },

  printError(err) {
    Console.print(err.message);
  },

  printUserCont(count) {
    Console.print(MESSAGE.USER.buyLotto(count));
  },
};

export default outputView;
