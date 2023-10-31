import { MissionUtils } from "@woowacourse/mission-utils";

const randomNumberMaker = () => {
    const randomNumberArray = [];
    while (randomNumberArray.length < 3) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!randomNumberArray.includes(randomNumber)) {
            randomNumberArray.push(randomNumber);
        }
    }
    return randomNumberArray.join('');
}

export default randomNumberMaker