import Visitor from '../model/Visitor.js';
import Planer from '../model/Planer.js';
import Waiter from '../view/Waiter.js';

class ChristmasService {
  #visitor;
  #waiter;
  #planer;

  constructor() {
    this.#visitor = new Visitor();
  }

  async order() {
    await this.#visitor.order();
  }

  eventCheck() {
    this.#planer = new Planer(this.#visitor);
    this.#planer.eventApply();
  }

  eventPreView() {
    this.#waiter = new Waiter(this.#visitor, this.#planer);
    this.#waiter.printOrder();
    this.#waiter.printEventPreView();
  }

  static async play() {
    const christmasEvent = new ChristmasService();
    await christmasEvent.order();
    christmasEvent.eventCheck();
    christmasEvent.eventPreView();
  }
}

export default ChristmasService;
