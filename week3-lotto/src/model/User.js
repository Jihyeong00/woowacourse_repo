import { numberCheck } from '../util/validation.js';
import { MESSAGE } from '../constants/messages.js';
import { TRY_COST } from '../constants/policy.js';
import outputView from '../view/outputView.js';
import inputView from '../view/inputView.js';

class User {
  constructor() {
    this.count = 0;
  }

  #validation(number) {
    numberCheck.number(number, MESSAGE.ERROR.number);
    numberCheck.unit(number, TRY_COST, MESSAGE.ERROR.unit);
  }

  getCount() {
    return this.count;
  }

  setUserMoney(money) {
    this.count = money / TRY_COST;
    outputView.printUserCont(this.count);
  }

  async readAndSetUserMoney() {
    try {
      const money = await inputView.readUserMoney();
      this.#validation(money);
      this.setUserMoney(money);
    } catch (err) {
      outputView.printError(err);
      await this.readAndSetUserMoney();
    }
  }
}

export default User;
