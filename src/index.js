/**
 * Password generator library
 */
class PasswordGenerator {
  /**
   * Creates a new PasswordGenerator instance.
   * @param {Object} options - The options to configure the password generator.
   * @param {Number} options.length - The length of the generated password.
   * @param {Boolean} options.includeUppercase - Whether to include uppercase letters in the generated password.
   * @param {Boolean} options.includeLowercase - Whether to include lowercase letters in the generated password.
   * @param {Boolean} options.includeNumbers - Whether to include numbers in the generated password.
   */
  constructor(options) {
    const defaultOptions = {
      length: 12,
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
    };
    this.options = Object.assign({}, defaultOptions, options);
  }

  /**
   * Generates a random password.
   * @returns {String} The generated password.
   */
  generate() {
    let password = "";
    const charset = this._getCharset();
    for (let i = 0; i < this.options.length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

  /**
   * Returns the character set based on the current options.
   * @returns {String} The character set to use for generating passwords.
   * @private
   */
  _getCharset() {
    let charset = "";
    if (this.options.includeUppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (this.options.includeLowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (this.options.includeNumbers) {
      charset += "0123456789";
    }

    return charset;
  }
}

export default PasswordGenerator;
