export const ERROR_MESSAGE = {
  menu: '유효하지 않은 주문입니다. 다시 입력해 주세요.',
  date: '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
};

export const OUTPUT_MESSAGE = {
  orderMenu: '\n<주문 메뉴>',
  prevTotal: '\n<할인 전 총주문 금액>',
  presentMenu: '\n<증정 메뉴>',
  benefitHistory: '\n<혜택 내역>',
  discountTotal: '\n<총혜택 금액>',
  presentValue: '샴페인 1개',
  badge: '\n<12월 이벤트 배지>',
  menuPreview: ({ name, count }) => `${name} ${count}개`,
  benefitPreview: ({ name, benefit }) =>
    `${name} : -${benefit.toLocaleString()}`,
  totalPrice: '<할인 후 예상 결제 금액>',
  discountMoney: (discountTotal) => `-${discountTotal.toLocaleString()}원`,
  won: (money) => `${money}원`,
  empty: '없음',
};
