import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants/messages.js';
import { REWORD, TRY_COST } from './constants/policy.js';

class Board {
  static getTotalReword(rank) {
    let totalReword = 0;
    rank.forEach((v) => {
      if (v >= 1 && v < 6) {
        totalReword += REWORD[`${v}th`];
      }
    });
    return totalReword;
  }

  static getRevenue(tryCount, totalReword) {
    const cost = tryCount * TRY_COST;
    const revenue = totalReword / cost;
    return Math.floor(revenue * 1000) / 10;
  }

  printResult(ranks) {
    Console.print(MESSAGE.BOARD.result);
    Array.from({ length: 5 }).forEach((_, i) => {
      Console.print(
        MESSAGE.BOARD[`${i + 1}th`](ranks.filter((v) => v === i + 1).length),
      );
    });
  }

  printRevenue(ranks) {
    Console.print(
      MESSAGE.BOARD.revenue(
        Board.getRevenue(ranks.length, Board.getTotalReword(ranks)),
      ),
    );
  }
}

export default Board;
