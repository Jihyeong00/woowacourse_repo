import { total } from '../../util/array-helper.js';
import { MENUS, WINE_EVENT_MIN_PRICE } from '../../constants/policy.js';

class EventList {
  #eventList = [];
  #visitDateInformation;
  #orderList;
  #totalPrice;

  constructor(visitDateInformation, orderList, totalPrice) {
    this.#visitDateInformation = visitDateInformation;
    this.#orderList = orderList;
    this.#totalPrice = totalPrice;
  }

  setEventList(name, benefit) {
    this.#eventList = [...this.#eventList, { name, benefit }];
  }

  getEventList() {
    return this.#eventList;
  }

  christmasEvent() {
    const date = this.#visitDateInformation.visitDate;
    if (date >= 1 && date < 26) {
      const salePrice = (date - 1) * 100 + 1000;
      this.setEventList('크리스마스 디데이 할인', salePrice);
    }
  }

  weekDayEvent() {
    const day = this.#visitDateInformation.day;
    const salePrice =
      total(
        this.#orderList
          .filter((menu) => menu.type === '디저트')
          .map((menu) => menu.count)
      ) * 2023;
    if (day < 5 && salePrice) {
      this.setEventList('평일 할인', salePrice);
    }
  }

  weekEndEvent() {
    const day = this.#visitDateInformation.day;
    const salePrice =
      total(
        this.#orderList
          .filter((menu) => menu.type === '메인')
          .map((menu) => menu.count)
      ) * 2023;
    if (day >= 5 && salePrice) {
      this.setEventList('주말 할인', salePrice);
    }
  }

  specialEvent() {
    const date = this.#visitDateInformation.visitDate;
    const day = this.#visitDateInformation.day;
    if (day === 0 || date === 25) {
      const salePrice = 1000;
      this.setEventList('특별 할인', salePrice);
    }
  }

  wineEvent() {
    if (this.#totalPrice > WINE_EVENT_MIN_PRICE) {
      const salePrice = MENUS.find((menu) => menu.name === '샴페인').price;
      this.setEventList('증정 이벤트', salePrice);
    }
  }
}

export default EventList;
