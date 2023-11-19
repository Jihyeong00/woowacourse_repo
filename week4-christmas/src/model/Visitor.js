import inputView from '../view/InputView.js';
import outputView from '../view/OutputView.js';
import VisitDateInformation from '../service/visitor/VisitDateInformation.js';
import OrderList from '../service/visitor/OrderList.js';

class Visitor {
  #visitInfo;
  #orderList;

  async readVisitorDay() {
    try {
      const day = await inputView.readDate();
      const visitedDay = new VisitDateInformation(day);
      this.setVisitInfo(visitedDay);
    } catch (err) {
      outputView.printError(err);
      await this.readVisitorDay();
    }
  }

  async readOrderList() {
    try {
      const orderListInputs = (await inputView.readMenu())
        .split(',')
        .map((OrderListInput) => {
          const menu = OrderListInput.split('-');
          return { name: menu[0], count: Number(menu[1]) };
        });
      const orderList = new OrderList(orderListInputs);
      this.setMenuList(orderList);
    } catch (err) {
      outputView.printError(err);
      await this.readOrderList();
    }
  }

  setVisitInfo(visitInfo) {
    this.#visitInfo = visitInfo;
  }

  setMenuList(menuList) {
    this.#orderList = menuList;
  }

  getVisitInfo() {
    return this.#visitInfo.getVisitDateInformation();
  }

  getMenuList() {
    return this.#orderList.getOrderList();
  }

  async order() {
    await this.readVisitorDay();
    await this.readOrderList();
  }
}

export default Visitor;
