import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
    async play() {
        Console.print("숫자 야구게임을 시작합니다.")
        let isOut = false

        function randomNumberMaker() {
            const randomNumberArray = [];
            while (randomNumberArray.length < 3) {
                const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!randomNumberArray.includes(randomNumber)) {
                    randomNumberArray.push(randomNumber);
                }
            }
            return randomNumberArray.join('');
        }

        function validation(number) {
            if (isNaN(Number(number))) throw new Error("[ERROR] 숫자를 입력하지 않았습니다.");
            if (number.length !== 3) throw new Error("[ERROR] 숫자의 길이가 3이상이지 않습니다.");
            if (number[0] === number[1] || number[1] === number[2] || number[2] === number[0]) throw new Error("[ERROR] 동일한 숫자가 입력이 되었습니다.");
        }

        function baseGame(randomNumber, pickNumber) {
            let strikeCount = 0;
            let ballCount = 0;

            if (randomNumber === pickNumber) {
                isOut = true;
                return "3스트라이크"
            }


            for (let i = 0; i < pickNumber.length; i++) {
                if (randomNumber.includes(pickNumber[i])) {
                    randomNumber[i] === (pickNumber[i]) ? strikeCount++ : ballCount++;
                }
            }

            if (!strikeCount && !ballCount) return "낫싱";
            if (!strikeCount && ballCount) return `${ballCount}볼`;
            if (strikeCount && !ballCount) return `${strikeCount}스트라이크`;

            return `${ballCount}볼 ${strikeCount}스트라이크`
        }

        const randomNumber = randomNumberMaker();

        while (!isOut) {
            const pickNumber = await Console.readLineAsync("숫자를 입력해주세요 : ")
            validation(pickNumber);
            Console.print(baseGame(randomNumber, pickNumber));
        }

        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")

        if (await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.") === '1') await this.play();
    }
}

export default App;