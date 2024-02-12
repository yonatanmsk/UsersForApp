function emailIsValid(email) {
  // in the form of user@mail.com
  const re = /^[a-zA-Z0-9._%+-]+@mail\.com$/i;
  return re.test(email);
}

module.exports = { emailIsValid };