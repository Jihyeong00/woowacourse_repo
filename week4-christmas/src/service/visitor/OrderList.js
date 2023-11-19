import {
  MAX_ORDER_COUNT,
  MENUS,
  MIN_ORDER_COUNT,
} from '../../constants/policy.js';
import { ERROR_MESSAGE } from '../../constants/message.js';
import { total } from '../../util/array-helper.js';
import { isNumber, validationCheck } from '../../util/validation-helper.js';

class OrderList {
  #orderList;

  constructor(menus) {
    const inputMenu = menus.map((menu) => {
      return {
        ...MENUS.find((item) => item.name === menu.name),
        count: menu.count,
      };
    });
    this.#validate(inputMenu);
    this.#orderList = inputMenu;
  }

  #validate(menus) {
    this.#menuCountCheck(menus);
    this.#menuNameCheck(menus);
  }

  #isOnlyDrinkType(menus) {
    return menus.filter((menu) => menu.type !== '음료').length === 0;
  }

  #isDuplication(menus) {
    const menus_names = menus.map((menu) => menu.name);
    return menus_names.length !== new Set(menus_names).size;
  }

  #isIncludeMenu(menus) {
    const menus_names = menus.map((menu) => menu.name);
    return menus_names
      .map((menus_name) => MENUS.find((menu) => menu.name === menus_name))
      .includes(undefined);
  }

  #menuNameCheck(menus) {
    validationCheck(this.#isOnlyDrinkType(menus), ERROR_MESSAGE.menu);
    validationCheck(this.#isDuplication(menus), ERROR_MESSAGE.menu);
    validationCheck(this.#isIncludeMenu(menus), ERROR_MESSAGE.menu);
    validationCheck(this.#isNumberCheck(menus), ERROR_MESSAGE.menu);
  }

  #isNumberCheck(menus) {
    return menus.map((menu) => isNumber(menu.count)).includes(true);
  }

  #isMaxOverCount(menus) {
    return total(menus.map((menu) => menu.count)) > MAX_ORDER_COUNT;
  }

  #isMinUnderCount(menus) {
    return total(menus.map((menu) => menu.count)) < MIN_ORDER_COUNT;
  }

  #menuCountCheck(menus) {
    validationCheck(this.#isMaxOverCount(menus), ERROR_MESSAGE.menu);
    validationCheck(this.#isMinUnderCount(menus), ERROR_MESSAGE.menu);
  }

  getOrderList() {
    return this.#orderList;
  }
}

export default OrderList;
