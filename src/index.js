/**
 * Password generator library
 */
class PasswordGenerator {
  /**
   * Creates a new PasswordGenerator instance.
   * @param {Object} options - The options to configure the password generator.
   * @param {Number} options.length - The length of the generated password.
   * @param {Boolean} options.uppercase - Whether to include uppercase letters in the generated password.
   * @param {Boolean} options.lowercase - Whether to include lowercase letters in the generated password.
   * @param {Boolean} options.numbers - Whether to include numbers in the generated password.
   */
  constructor(options) {
    const defaultOptions = {
      length: 10,
      uppercase: true,
      lowercase: true,
      numbers: true,
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
    if (this.options.uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (this.options.lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (this.options.numbers) {
      charset += "0123456789";
    }

    return charset;
  }
}

export default PasswordGenerator;
