import outputView from './OutputView.js';
import { WINE_EVENT_MIN_PRICE } from '../constants/policy.js';
import { OUTPUT_MESSAGE } from '../constants/message.js';

class Waiter {
  #visitor;
  #planer;

  constructor(visitor, planer) {
    this.#visitor = visitor;
    this.#planer = planer;
  }

  printOrder() {
    outputView.printMenu(this.#visitor.getMenuList());
  }

  #checkPresentEvent() {
    return this.#planer.getTotalPrice() > WINE_EVENT_MIN_PRICE
      ? '샴페인 1개'
      : OUTPUT_MESSAGE.empty;
  }

  #getEventList() {
    return this.#planer.getEventList().filter((list) => list.benefit > 0);
  }

  #getTotalPrice() {
    return this.#planer.getTotalPrice() - this.#planer.getDiscountTotal();
  }

  printEventPreView() {
    outputView.printDiscountPrevTotal(this.#planer.getTotalPrice());
    outputView.printWineEvent(this.#checkPresentEvent());
    outputView.printEventList(this.#getEventList());
    outputView.printDiscountResult(this.#planer.getDiscountTotal());
    outputView.printTotalPrice(this.#getTotalPrice());
    outputView.printBadge(this.#planer.getBadge());
  }
}

export default Waiter;
