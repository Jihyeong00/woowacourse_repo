import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu(menus) {
    Console.print('\n<주문 메뉴>');
    menus.forEach((menu) => Console.print(`${menu.name} ${menu.count}개`));
  },
  printDiscountPrevTotal(total) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${total.toLocaleString()}원`);
  },
  printWineEvent(isWine) {
    Console.print('\n<증정 메뉴>');
    isWine ? Console.print('샴페인 1개') : Console.print('없음');
  },
  printEventList(list) {
    Console.print('\n<혜택 내역>');
    const eventList = list.filter((list) => list.benefit > 0);
    eventList.length > 0
      ? eventList.forEach((event) =>
          Console.print(`${event.name} : -${event.benefit.toLocaleString()}`)
        )
      : Console.print('없음');
  },
  printDiscountResult(discountTotal) {
    Console.print('\n<총혜택 금액>');
    discountTotal === 0
      ? Console.print('0원')
      : Console.print(`-${discountTotal.toLocaleString()}원`);
  },
  printTotalPrice(total) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${total.toLocaleString()}원`);
  },
  printBadge(badge) {
    Console.print('\n<12월 이벤트 배지>');
    Console.print(badge);
  },
  printError(err) {
    Console.print(err.message);
  },
};

export default OutputView;
