const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(massage, key) {
    let arr_massage = massage.toLowerCase().split('');
    let arr_key = key.toLowerCase().split('');
    let result = [];
    let amp = 0;

    if (!(constructor)) arr_massage.reverse();

    for (let i = 0; arr_key.length < arr_massage.length; i++) {
      if (i >= arr_key.length) {
        arr_key.push(arr_key[i-arr_key.length]);
      } else {
        arr_key.push(arr_key[i]);
      }
    }
    
    for (let i = 0; i < arr_massage.length; i++) {
      if (arr_massage[i].charCodeAt(0) < 97 || arr_massage[i].charCodeAt(0) > 122) {
          result.push(arr_massage[i]);
      } else {
          let encrypt_letter = arr_key[amp].charCodeAt(0) - 97 + arr_massage[i].charCodeAt(0);
          if (encrypt_letter > 122) {
            encrypt_letter -= 26;
            encrypt_letter = String.fromCharCode(encrypt_letter);
            result.push(encrypt_letter);
            ++amp;
          } else {
            encrypt_letter = String.fromCharCode(encrypt_letter);
            result.push(encrypt_letter);
            ++amp;
          }
      }
    }

    return result.join('').toUpperCase();
  }    

  decrypt(massage, key) {
    let arr_massage = massage.toLowerCase().split('');
    let arr_key = key.toLowerCase().split('');
    let result = [];
    let amp = 0;

    if (!(constructor)) arr_massage.reverse();

    for (let i = 0; arr_key.length < arr_massage.length; i++) {
      if (i >= arr_key.length) {
        arr_key.push(arr_key[i-arr_key.length]);
      } else {
        arr_key.push(arr_key[i]);
      }
    }

    for (let i = 0; i < arr_massage.length; i++) {
      if (arr_massage[i].charCodeAt(0) < 97 || arr_massage[i].charCodeAt(0) > 122) {
          result.push(arr_massage[i]);
      } else {
          let encrypt_letter = arr_massage[i].charCodeAt(0) - (arr_key[amp].charCodeAt(0) - 97);
          if (encrypt_letter < 97) {
            encrypt_letter -= 6;
            encrypt_letter = String.fromCharCode(encrypt_letter);
            result.push(encrypt_letter);
            ++amp;
          } else {
            encrypt_letter = String.fromCharCode(encrypt_letter);
            result.push(encrypt_letter);
            ++amp;
          }
      }
    }

    return result.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
