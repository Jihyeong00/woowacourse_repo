import Planer from "../src/model/Planer.js";
import Visitor from "../src/model/Visitor.js";
import OrderList from "../src/service/visitor/OrderList.js";
import VisitDateInformation from "../src/service/visitor/VisitDateInformation.js";

describe("Planer EventList 테스트", () => {
    let eventManager

    beforeEach(() => {
        jest.restoreAllMocks();

        const visitor = new Visitor()
        visitor.setVisitInfo(new VisitDateInformation(25))
        visitor.setMenuList(new OrderList([
            {
                "name": "티본스테이크",
                "count": 2
            },
            {
                "name": "크리스마스파스타",
                "count": 4
            },
            {
                "name": "아이스크림",
                "count": 4
            }
        ]))
        eventManager = new Planer(visitor)
    })

    test("주문한 금액의 총 비용을 정확하게 가져오는지 확인합니다.", () => {
        expect(eventManager.getTotalPrice()).toBe(230000)
    })

    test("이벤트 들이 정확하게 적용이 되는지 확인합니다.", () => {
            eventManager.eventApply()
            expect(eventManager.getEventList()).toEqual([
                {
                    "benefit": 3400,
                    "name": "크리스마스 디데이 할인"
                },
                {
                    "benefit": 8092,
                    "name": "평일 할인"
                },
                {
                    "benefit": 1000,
                    "name": "특별 할인",
                },
                {
                    "name": "증정 이벤트", "benefit": 25000
                }
            ])
        }
    )

    test("주말 이벤트가 적용이 되는지 확인합니다.", () => {
            const visitor = new Visitor()
            visitor.setVisitInfo(new VisitDateInformation(9))
            visitor.setMenuList(new OrderList([
                {
                    name: "티본스테이크",
                    count: 2
                }, {
                    name: "크리스마스파스타",
                    count: 3
                }
            ]))
            const eventPlaner = new Planer(visitor)
            eventPlaner.eventApply()
            expect(eventPlaner.getEventList()).toEqual(
                [
                    {"benefit": 1800, "name": "크리스마스 디데이 할인"},
                    {"benefit": 10115, "name": "주말 할인"},
                    {"name": "증정 이벤트", "benefit": 25000}
                ])
        }
    )

    test("평일 이벤트가 적용이 되는지 확인합니다.", () => {
            const visitor = new Visitor()
            visitor.setVisitInfo(new VisitDateInformation(6))
            visitor.setMenuList(new OrderList([
                {
                    type: "디저트",
                    name: "아이스크림",
                    price: 5000,
                    count: 5
                },
                {
                    type: "디저트",
                    name: "초코케이크",
                    price: 15000,
                    count: 5
                }
            ]))
            const eventPlaner = new Planer(visitor)
            eventPlaner.eventApply()
            expect(eventPlaner.getEventList()).toEqual([
                {"benefit": 1500, "name": "크리스마스 디데이 할인"},
                {"benefit": 20230, "name": "평일 할인"}])
        }
    )

    test("특별 이벤트가 적용이 되는지 확인 합니다.", () => {
            const visitor = new Visitor()
            visitor.setVisitInfo(new VisitDateInformation(3))
            visitor.setMenuList(new OrderList([{
                type: "메인",
                name: "티본스테이크",
                price: 55000,
                count: 2
            }, {
                type: "메인",
                name: "크리스마스파스타",
                price: 25000,
                count: 3
            }]))

            const eventPlaner = new Planer(visitor)
            eventPlaner.eventApply()
            expect(eventPlaner.getEventList()).toEqual([
                {
                    "benefit": 1200,
                    "name": "크리스마스 디데이 할인"
                },
                {
                    "benefit": 1000,
                    "name": "특별 할인"
                }, {
                    "name": "증정 이벤트",
                    "benefit": 25000
                }
            ])
        }
    )

    test("와인증정 이벤트가 적용이 되는지 확인 합니다.", () => {
            const visitor = new Visitor()
            visitor.setVisitInfo(new VisitDateInformation(3))
            visitor.setMenuList(new OrderList([
                {
                    type: "메인",
                    name: "티본스테이크",
                    price: 55000,
                    count: 4
                },
                {
                    type: "메인",
                    name: "크리스마스파스타",
                    price: 25000,
                    count: 7
                },
                {
                    type: "디저트", name: "아이스크림", price: 5000, count: 3
                }
            ]))

            const eventPlaner = new Planer(visitor)
            eventPlaner.eventApply()
            expect(eventPlaner.getEventList()).toEqual([
                {
                    "benefit": 1200,
                    "name": "크리스마스 디데이 할인"
                },
                {
                    "benefit": 6069,
                    "name": "평일 할인"
                },
                {
                    "benefit": 1000,
                    "name": "특별 할인"
                },
                {
                    "name": "증정 이벤트",
                    "benefit": 25000
                }
            ])
        }
    )

    test("뱃지증정 이벤트가 잘 되는지 확인합니다.", () => {
            eventManager.eventApply();
            expect(eventManager.getBadge()).toStrictEqual("산타")
        }
    )
});
