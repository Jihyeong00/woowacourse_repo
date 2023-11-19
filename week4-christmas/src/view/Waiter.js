import outputView from './OutputView.js';
import { WINE_EVENT_MIN_PRICE } from '../constants/policy.js';

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

  printEventPreView() {
    outputView.printDiscountPrevTotal(this.#planer.getTotalPrice());
    outputView.printWineEvent(
      this.#planer.getTotalPrice() > WINE_EVENT_MIN_PRICE
    );
    outputView.printEventList(this.#planer.getEventList());
    outputView.printDiscountResult(this.#planer.getDiscountTotal());
    outputView.printTotalPrice(
      this.#planer.getTotalPrice() - this.#planer.getDiscountTotal()
    );
    outputView.printBadge(this.#planer.getBadge());
  }
}

export default Waiter;
