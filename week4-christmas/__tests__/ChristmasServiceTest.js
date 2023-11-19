import {ERROR_MESSAGE} from "../src/constants/message.js";
import ChristmasService from "../src/controller/ChristmasService.js";
import {MissionUtils} from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();

        return Promise.resolve(input);
    });
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();

    return logSpy;
};

describe("Controller 테스트", () => {
    test("생성이 되고 예외처리까지 되는지를 테스트합니다.", async () => {
        // given
        const INVALID_ORDER_MESSAGE = ERROR_MESSAGE.menu;
        const INPUTS_TO_END = ["해산물파스타-2"];
        const logSpy = getLogSpy();
        mockQuestions(["3", "제로콜라-a", ...INPUTS_TO_END]);

        // when
        const christmasService= new ChristmasService()
        await christmasService.order()

        // then
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
    });
});