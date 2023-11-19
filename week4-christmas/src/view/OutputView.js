import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message.js';

const OutputView = {
  printMenu(menus) {
    Console.print(OUTPUT_MESSAGE.orderMenu);
    menus.forEach((menu) => Console.print(OUTPUT_MESSAGE.menuPreview(menu)));
  },
  printDiscountPrevTotal(total) {
    Console.print(OUTPUT_MESSAGE.prevTotal);
    Console.print(OUTPUT_MESSAGE.won(total.toLocaleString()));
  },
  printWineEvent(message) {
    Console.print(OUTPUT_MESSAGE.presentMenu);
    Console.print(message);
  },
  printEventList(list) {
    Console.print(OUTPUT_MESSAGE.benefitHistory);
    list.length > 0
      ? list.forEach((event) => {
          Console.print(OUTPUT_MESSAGE.benefitPreview(event));
        })
      : Console.print(OUTPUT_MESSAGE.empty);
  },
  printDiscountResult(discountTotal) {
    Console.print(OUTPUT_MESSAGE.discountTotal);
    discountTotal === 0
      ? Console.print(OUTPUT_MESSAGE.won(0))
      : Console.print(OUTPUT_MESSAGE.discountMoney(discountTotal));
  },
  printTotalPrice(total) {
    Console.print(OUTPUT_MESSAGE.totalPrice);
    Console.print(OUTPUT_MESSAGE.won(total.toLocaleString()));
  },
  printBadge(badge) {
    Console.print(OUTPUT_MESSAGE.badge);
    Console.print(badge);
  },
  printError(err) {
    Console.print(err.message);
  },
};

export default OutputView;
