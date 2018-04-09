import checkdigit from 'checkdigit';

const CMC7_GROUPS = /(\d{7})(\d{1})(\d{10})(\d{1})(\d{10})(\d{1})/;
const NON_NUMBERS = /[^\d]/g;

export default class CMC7Validator {
  constructor(code) {
    const execution = CMC7_GROUPS.exec(code.replace(NON_NUMBERS, ''));
    if (!execution) {
      return;
    }
    this.dv1 = execution[4];
    this.dv2 = execution[2];
    this.dv3 = execution[6];
    this.group1 = execution[1];
    this.group2 = execution[3];
    this.group3 = execution[5];
  }

  isValid() {
    if (!this.dv1) {
      return false;
    }

    const dv1 = checkdigit.mod10.create(this.group1);
    const dv2 = checkdigit.mod10.create(this.group2);
    const dv3 = checkdigit.mod10.create(this.group3);

    return this.dv1 === dv1 && this.dv2 === dv2 && this.dv3 === dv3;
  }
}
