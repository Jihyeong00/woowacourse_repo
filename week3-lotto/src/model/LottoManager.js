import {numberCheck, numbersCheck} from '../util/validation.js';
import outputView from "../view/outputView.js";
import inputView from "../view/inputView.js";
import Lotto from "./Lotto.js";
import {LOTTO_NUMBER} from "../constants/policy.js";
import {MESSAGE} from "../constants/messages.js";

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
        let temp = false
        while (!temp) {
            try {
                const readNumber = await inputView.readLuckyNumber()
                const lottoManager = new LottoManager(readNumber.split(',').map((v) => Number(v)))
                temp = true
                return lottoManager
            } catch (err) {
                outputView.printError(err);
            }
        }
    }

    async readAndSetBonusNumber(luckyNumber) {
        let temp = false
        while (!temp) {
            try {
                const bonusNumber = await inputView.readBonusNumber();
                this.#bonusNumberValidation(luckyNumber, bonusNumber);
                temp = true
                this.setBonusNumber(bonusNumber);
            } catch (err) {
                outputView.printError(err);
            }
        }
    }
}

export default LottoManager;
