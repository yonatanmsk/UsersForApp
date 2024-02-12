function passwordIsValid(password) {
    const hasNumber = /\d/.test(password); // At least one digit
    const hasUpperCase = /[A-Z]/.test(password); // At least one uppercase letter
    const hasLowerCase = /[a-z]/.test(password); // At least one lowercase letter
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password); // At least one special character
  
    // All conditions together
    return hasNumber && hasUpperCase && hasLowerCase && hasSpecialChar;
  }

module.exports = { passwordIsValid };