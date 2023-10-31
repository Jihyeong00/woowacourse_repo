export const GAME_MESSAGE = {
    START: "숫자 야구게임을 시작합니다.",
    END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    RE_GAME: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    INPUT_COUNT: "숫자를 입력해주세요 : ",
    ALERT_NOT: "낫싱",
    ALERT_BALL: (count) => `${count}볼`,
    ALERT_STRIKE: (count) => `${count}스트라이크`,
    ALERT_BOTH: (ballCount, strikeCount) => `${ballCount}볼 ${strikeCount}스트라이크`
}

export const ERROR_MESSAGE = {
    TYPE: "[ERROR] 숫자를 입력하지 않았습니다.",
    LENGTH: "[ERROR] 숫자의 길이가 3이상이지 않습니다.",
    DUPLICATION: "[ERROR] 동일한 숫자가 입력이 되었습니다."
}