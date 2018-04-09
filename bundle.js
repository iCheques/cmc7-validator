(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CMC7Validator = factory());
}(this, (function () { 'use strict';

  var mod11 = {
    isValid: isValid,
    create: create,
    apply: apply
  };

  function isValid(input) {
    var checkDigitIndex = input.length - 1;
    return input.substr(checkDigitIndex) === create(input.substr(0, checkDigitIndex));
  }

  function apply(input) {
    return input + create(input);
  }

  function create(input) {
    var sum = 0;
    input.split('').reverse().forEach(function (value, index) {
      sum += parseInt(value, 10) * (index % 6 + 2);
    });
    var sumMod11 = sum % 11;
    if (sumMod11 === 0) {
      return '0';
    } else if (sumMod11 === 1) {
      return '-';
    } else {
      return (11 - sumMod11) + '';
    }
  }

  var mod10 = {
    isValid: isValid$1,
    create: create$1,
    apply: apply$1
  };

  function isValid$1(input) {
    var checkDigitIndex = input.length - 1;
    return input.substr(checkDigitIndex) === create$1(input.substr(0, checkDigitIndex));
  }

  function apply$1(input) {
    return input + create$1(input);
  }

  function create$1(input) {
    var sum = 0;
    input.split('').reverse().forEach(function (value, index) {
      var weight = (index + 1) % 2 + 1;
      sum += digitSum(parseInt(value, 10) * weight);
    });
    var sumMod10 = sum % 10;
    if (sumMod10 === 0) {
      return '0';
    } else {
      return (10 - sumMod10) + '';
    }
  }

  function digitSum(number) {
    var sum = number > 9 ? 1 : 0;
    return sum + number % 10;
  }

  var mod11$1 = mod11;
  var mod10$1 = mod10;

  var checkdigit = {
  	mod11: mod11$1,
  	mod10: mod10$1
  };

  var CMC7_GROUPS = /(\d{7})(\d{1})(\d{10})(\d{1})(\d{10})(\d{1})/;
  var NON_NUMBERS = /[^\d]/g;

  var CMC7Validator = function CMC7Validator(code) {
    var execution = CMC7_GROUPS.exec(code.replace(NON_NUMBERS, ''));
    if (!execution) {
      return;
    }
    this.dv1 = execution[4];
    this.dv2 = execution[2];
    this.dv3 = execution[6];
    this.group1 = execution[1];
    this.group2 = execution[3];
    this.group3 = execution[5];
  };

  CMC7Validator.prototype.isValid = function isValid () {
    if (!this.dv1) {
      return false;
    }

    var dv1 = checkdigit.mod10.create(this.group1);
    var dv2 = checkdigit.mod10.create(this.group2);
    var dv3 = checkdigit.mod10.create(this.group3);

    return this.dv1 === dv1 && this.dv2 === dv2 && this.dv3 === dv3;
  };

  return CMC7Validator;

})));
