import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';

const inputView = {
  readLuckyNumber: () => Console.readLineAsync(MESSAGE.LOTTO.setLuckyNumber),

  readBonusNumber: () => Console.readLineAsync(MESSAGE.LOTTO.setBonusNumber),

  readUserMoney: () => Console.readLineAsync(MESSAGE.USER.setMoney),
};

export default inputView;
