import outputView from '../view/outputView.js';
import User from '../model/User.js';
import LottoManager from '../model/LottoManager.js';
import CheckManager from '../model/CheckManager.js';

class LottoController {
  #user;
  #lottoManager;
  #checkManager;

  async #setUser() {
    this.#user = new User();
    await this.#user.readAndSetUserMoney();
  }

  async #setLottoNumber() {
    this.#lottoManager = await LottoManager.readSetLuckyNumber();
    await this.#lottoManager.readAndSetBonusNumber(
      this.#lottoManager.getLuckyNumber(),
    );
  }

  #setCheckManager() {
    this.#checkManager = new CheckManager(
      this.#lottoManager.getLuckyNumber(),
      this.#lottoManager.getBonusNumber(),
      this.#user.getCount(),
    );
  }

  #printResult(ranks) {
    outputView.printResult(ranks);
    outputView.printRevenue(ranks);
  }

  async play() {
    await this.#setUser();
    await this.#setLottoNumber();
    this.#setCheckManager();
    this.#printResult(this.#checkManager.getRanks());
  }
}

export default LottoController;
