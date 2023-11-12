import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_NUMBER, REWORD, TRY_COST } from '../constants/policy.js';
import outputView from '../view/outputView.js';

class CheckManager {
  #ranks;

  constructor(luckyNumber, bonusNumber, tryCount) {
    this.#ranks = this.#checkRanks(
      luckyNumber,
      bonusNumber,
      this.#publishLottos(tryCount),
    );
  }

  #publishLottos(count) {
    const publishLottos = Array.from({ length: count }).map(() =>
      MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER.startNumber,
        LOTTO_NUMBER.endNumber,
        LOTTO_NUMBER.lottoLength,
      ).sort((a, b) => a - b),
    );

    outputView.printPublishLotto(publishLottos);

    return publishLottos;
  }

  #checkRanks(luckyNumber, bonusNumber, randomPublishLottos) {
    return randomPublishLottos.map((randomPublishLotto) => {
      const differentCount = this.#checkLuckyNumber(luckyNumber, randomPublishLotto);
      const isBonus = this.#checkBonus(bonusNumber, randomPublishLottos);
      if (differentCount === 0) return 1;
      if (differentCount === 1) {
        if (isBonus) {
          return 2;
        }
        return 3;
      }
      return differentCount + 2;
    });
  }

  #checkLuckyNumber(luckyNumber, randomPublishLotto) {
    let differentCount = LOTTO_NUMBER.lottoLength;
    randomPublishLotto.forEach((number) => {
      if (luckyNumber.includes(number)) {
        differentCount--;
      }
    });
    return differentCount;
  }

  #checkBonus(bonusNumber, randomPublishLotto) {
    return randomPublishLotto.includes(bonusNumber);
  }

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

  getRanks() {
    return this.#ranks;
  }
}

export default CheckManager;
