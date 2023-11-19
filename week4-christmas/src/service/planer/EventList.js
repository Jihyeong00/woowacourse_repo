import { total } from '../../util/array-helper.js';
import {
  DATE,
  DAY,
  EVENT_MENU,
  EVENT_NAME,
  MENUS,
  SALE_PRICE,
  WINE_EVENT_MIN_PRICE,
} from '../../constants/policy.js';

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

  #getTypeMenuList(list, menuType) {
    return list
      .filter((menu) => menu.type === menuType)
      .map((menu) => menu.count);
  }

  setEventList(name, benefit) {
    this.#eventList = [...this.#eventList, { name, benefit }];
  }

  getEventList() {
    return this.#eventList;
  }

  #isChristmasEventDay(date) {
    return date <= DATE.christmas && date > 1;
  }

  #christmasEventGetSalePrice = (date) => {
    return (
      (date - 1) * SALE_PRICE.christmasIncreaseValue +
      SALE_PRICE.christmasInitialValue
    );
  };

  christmasEvent() {
    const date = this.#visitDateInformation.visitDate;
    if (!this.#isChristmasEventDay(date)) return;
    this.setEventList(
      EVENT_NAME.christmas,
      this.#christmasEventGetSalePrice(date)
    );
  }

  #isIncludeWeekDayEvent(day, salePrice) {
    return day < DAY.FRI && salePrice;
  }

  weekDayEvent() {
    const day = this.#visitDateInformation.day;
    const salePrice =
      total(this.#getTypeMenuList(this.#orderList, EVENT_MENU.TYPE.weekDay)) *
      SALE_PRICE.weekDay;

    if (!this.#isIncludeWeekDayEvent(day, salePrice)) return;

    this.setEventList(EVENT_NAME.weekDay, salePrice);
  }

  #isIncludeWeekEndEvent(day, salePrice) {
    return DAY.FRI <= day && salePrice;
  }

  weekEndEvent() {
    const day = this.#visitDateInformation.day;
    const salePrice =
      total(this.#getTypeMenuList(this.#orderList, EVENT_MENU.TYPE.weekEnd)) *
      SALE_PRICE.weekEnd;
    if (!this.#isIncludeWeekEndEvent(day, salePrice)) return;
    this.setEventList(EVENT_NAME.weekEnd, salePrice);
  }

  #isIncludeSpecialEvent(day, date) {
    return day === DAY.SUN || date === DATE.christmas;
  }

  specialEvent() {
    const date = this.#visitDateInformation.visitDate;
    const day = this.#visitDateInformation.day;
    if (!this.#isIncludeSpecialEvent(day, date)) return;
    this.setEventList(EVENT_NAME.special, SALE_PRICE.special);
  }

  #isIncludePresentEvent() {
    return this.#totalPrice > WINE_EVENT_MIN_PRICE;
  }

  presentEvent() {
    if (!this.#isIncludePresentEvent()) return;
    const salePrice = MENUS.find(
      (menu) => menu.name === EVENT_MENU.VALUE.present
    ).price;
    this.setEventList(EVENT_NAME.present, salePrice);
  }
}

export default EventList;
