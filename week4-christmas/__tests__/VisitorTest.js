import OrderList from "../src/service/visitor/OrderList.js";
import VisitDateInformation from "../src/service/visitor/VisitDateInformation.js";
import {ERROR_MESSAGE} from "../src/constants/message.js";

describe("Visitor Menu 테스트", () => {
    test("중복된 값을 입력을 받았을 때 에러를 발생한다.", () => {
            expect(() => {
                const myWishList = [{name: "티본스테이크", count: 2}, {name: "티본스테이크", count: 4}, {name: "아이스크림", count: 4}]
                new OrderList(myWishList)
            }).toThrow(ERROR_MESSAGE.menu)
        }
    )
    test("잘못된 메뉴를 입력을 받았을 때 에러를 발생시킨다.", () => {
            expect(() => {
                const myWishList = [{name: "티본스테이크", count: 2}, {name: "제로사이다", count: 4}, {name: "아이스크림", count: 4}]
                new OrderList(myWishList)
            }).toThrow(ERROR_MESSAGE.menu);
        }
    )
    test("주문한 메뉴의 개수가 20개가 넘어갈 때 에러를 발생시킨다.", () => {
            expect(() => {
                const myWishList = [{name: "티본스테이크", count: 12}, {name: "크리스마스파스타", count: 5}, {name: "아이스크림", count: 4}]
                new OrderList(myWishList)
            }).toThrow(ERROR_MESSAGE.menu);
        }
    )
    test("주문한 메뉴가 음료만 있을 경우 에러를 발생시키다.", () => {
            expect(() => {
                const myWishList = [{name: "제로콜라", count: 12}, {name: "레드와인", count: 5}]
                new OrderList(myWishList)
            }).toThrow(ERROR_MESSAGE.menu);
        }
    )
    test("주문한 메뉴의 갯수가 0개일 경우 에러를 발생시킨다.", () => {
            expect(() => {
                const myWishList = [{name: "제로콜라", count: 0}]
                new OrderList(myWishList)
            }).toThrow(ERROR_MESSAGE.menu);
        }
    )
    test("주문한 메뉴의 갯수가 문자열일 경우 에러를 발생시킨다.", () => {
            expect(() => {
                const myWishList = [{name: "제로콜라", count: "십일"}, {name: "크리스마스파스타", count: 4}]
                new OrderList(myWishList)
            }).toThrow(ERROR_MESSAGE.menu);
        }
    )
    test("주문한 메뉴의 정보를 똑바로 가져오는지 확인합니다.", () => {
        const myWishList = [{name: "티본스테이크", count: 2}, {name: "크리스마스파스타", count: 4}, {name: "아이스크림", count: 4}]
        const menu = new OrderList(myWishList)

        expect(menu.getOrderList()).toStrictEqual([{type: "메인", name: "티본스테이크", price: 55000, count: 2}, {
            type: "메인",
            name: "크리스마스파스타",
            price: 25000,
            count: 4
        }, {type: "디저트", name: "아이스크림", price: 5000, count: 4,}])
    });
});

describe("Visitor Visitor 테스트", () => {
    test("숫자가 아닌 정보를 입력하였을 때의 에러를 발생시킨다.", () => {
            expect(() => {
                const day = "십일"
                new VisitDateInformation(day)
            }).toThrow(ERROR_MESSAGE.date)
        }
    )
    test("12월에 없는 날의 정보를 입력하였을 때의 에러를 발생시킨다.", () => {
        expect(() => {
            const day = 32
            new VisitDateInformation(day)
        }).toThrow(ERROR_MESSAGE.date)
    });

    test("사용자가 입력한 방문날짜의 정보를 똑바로 가져오는지 확인합니다.", () => {
        const day = 5
        const visitDay = new VisitDateInformation(day)
        expect(visitDay.getVisitDateInformation()).toStrictEqual({visitDate: 5, day: 2})
    });
});
