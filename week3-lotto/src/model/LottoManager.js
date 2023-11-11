import { numberCheck, numbersCheck } from '../util/validation.js';
import { LOTTO_NUMBER } from '../constants/policy.js';
import { MESSAGE } from '../constants/messages.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';
import Lotto from './Lotto.js';

class LottoManager extends Lotto {
  bonusNumber = 0;

  constructor(luckyNumber) {
    super(luckyNumber);
  }

  #bonusNumberValidation(luckyNumber, bonusNumber) {
    numberCheck.rangeCheck(
      bonusNumber,
      LOTTO_NUMBER.startNumber,
      LOTTO_NUMBER.endNumber,
      MESSAGE.ERROR.lottoRange,
    );
    numberCheck.number(bonusNumber, MESSAGE.ERROR.number);
    numbersCheck.duplicate(
      [...luckyNumber, bonusNumber],
      MESSAGE.ERROR.duplicate,
    );
  }

  setBonusNumber(bonusNumber) {
    this.bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }

  static async readSetLuckyNumber() {
    try {
      return new LottoManager(
        (await inputView.readLuckyNumber()).split(',').map((v) => Number(v)),
      );
    } catch (err) {
      outputView.printError(err);
      await LottoManager.readSetLuckyNumber();
    }
  }

  async readAndSetBonusNumber(luckyNumber) {
    try {
      const bonusNumber = await inputView.readBonusNumber();
      this.#bonusNumberValidation(luckyNumber, bonusNumber);
      this.setBonusNumber(bonusNumber);
    } catch (err) {
      outputView.printError(err);
      await this.readAndSetBonusNumber(luckyNumber);
    }
  }
}

export default LottoManager;
