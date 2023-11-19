export const MENUS = Object.freeze([
  { type: '에피타이저', name: '양송이수프', price: 6000 },
  { type: '에피타이저', name: '타파스', price: 5500 },
  { type: '에피타이저', name: '시저샐러드', price: 8000 },
  { type: '메인', name: '티본스테이크', price: 55000 },
  { type: '메인', name: '바비큐립', price: 54000 },
  { type: '메인', name: '해산물파스타', price: 35000 },
  { type: '메인', name: '크리스마스파스타', price: 25000 },
  { type: '디저트', name: '초코케이크', price: 15000 },
  { type: '디저트', name: '아이스크림', price: 5000 },
  { type: '음료', name: '제로콜라', price: 3000 },
  { type: '음료', name: '레드와인', price: 60000 },
  { type: '음료', name: '샴페인', price: 25000 },
]);

export const EVENT_MIN_PRICE = 10000;

export const WINE_EVENT_MIN_PRICE = 120000;

export const DATE = {
  year: 2023,
  month: 12,
  christmas: 25,
};

export const MAX_ORDER_COUNT = 20;
export const MIN_ORDER_COUNT = 1;

export const EVENT_NAME = {
  weekDay: '평일 할인',
  weekEnd: '주말 할인',
  christmas: '크리스마스 디데이 할인',
  special: '특별 할인',
  present: '증정 이벤트',
};

export const EVENT_MENU = {
  TYPE: {
    weekDay: '디저트',
    weekEnd: '메인',
  },
  VALUE: {
    present: '샴페인',
    badge: [
      { name: '산타', value: 20000 },
      { name: '트리', value: 10000 },
      { name: '별', value: 5000 },
    ],
  },
};

export const SALE_PRICE = {
  christmasInitialValue: 1000,
  christmasIncreaseValue: 100,
  weekEnd: DATE.year,
  weekDay: DATE.year,
  special: 1000,
};

export const DAY = {
  SUN: 0,
  MON: 1,
  THY: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
};
