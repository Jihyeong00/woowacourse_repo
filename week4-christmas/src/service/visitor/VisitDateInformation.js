import { ERROR_MESSAGE } from '../../constants/message.js';
import { isNumber, validationCheck } from '../../util/validation-helper.js';

class VisitDateInformation {
  #visitDate;
  constructor(stringDate) {
    let date = Number(stringDate);
    this.#validation(date);
    this.#visitDate = date;
  }

  #isIncludeMonth(date) {
    return date < 0 || date > 31;
  }

  #validation(date) {
    validationCheck(isNumber(date), ERROR_MESSAGE.date);
    validationCheck(this.#isIncludeMonth(date), ERROR_MESSAGE.date);
  }

  getVisitDateInformation() {
    return {
      visitDate: this.#visitDate,
      day: new Date(2023, 11, this.#visitDate).getDay(),
    };
  }
}

export default VisitDateInformation;
