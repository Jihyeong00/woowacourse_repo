import EventList from '../service/planer/EventList.js';
import { total } from '../util/array-helper.js';
import { EVENT_MIN_PRICE } from '../constants/policy.js';

class Planer {
  #visitDateInformation;
  #orderList;
  #totalPrice;
  #eventList;

  constructor(visitDateInformation) {
    this.#visitDateInformation = visitDateInformation.getVisitInfo();
    this.#orderList = visitDateInformation.getMenuList();
    this.#totalPrice = total(
      this.#orderList.map((menu) => menu.count * menu.price)
    );
    this.#eventList = new EventList(
      this.#visitDateInformation,
      this.#orderList,
      this.#totalPrice
    );
  }

  getEventList() {
    return this.#eventList.getEventList();
  }

  getTotalPrice() {
    return this.#totalPrice;
  }

  getDiscountTotal() {
    return total(
      this.#eventList.getEventList().map((eventList) => eventList.benefit)
    );
  }

  eventApply() {
    if (this.#totalPrice < EVENT_MIN_PRICE) return;
    this.#eventList.christmasEvent();
    this.#eventList.weekDayEvent();
    this.#eventList.weekEndEvent();
    this.#eventList.specialEvent();
    this.#eventList.wineEvent();
  }

  getBadge() {
    const salePrice = this.getDiscountTotal();
    if (salePrice >= 20000) {
      return '산타';
    }
    if (salePrice >= 10000) {
      return '트리';
    }
    if (salePrice >= 5000) {
      return '별';
    }
    return '없음';
  }
}

export default Planer;
