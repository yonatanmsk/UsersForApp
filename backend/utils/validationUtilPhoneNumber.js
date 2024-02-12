function phoneIsValid(phone) {
    // in the form of 05X-XXXXXXX
    const phoneRegex = /^05\d-\d{7}$/;
    return phoneRegex.test(phone);
  }

  module.exports = { phoneIsValid };