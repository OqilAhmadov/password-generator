# Password Generator

Password Generator is a lightweight JavaScript library that allows you to generate strong and secure passwords with ease. With a simple and intuitive API, Password Generator is perfect for any project that requires password generation functionality.

## Authors

- [@oqil_ahmad](https://github.com/OqilAhmadov)

## Installation
To install Password Generator, simply run the following command in your terminal:
```bash
npm i password-generate-js
```

## Usage
Using Password Generator is incredibly easy. Once you've installed the library, simply import it into your project and use the generate method to generate a password.
####Javascript　

```javascript
import PasswordGenerator from "psg-js";

const passwordGenerator = new PasswordGenerator();

const password = passwordGenerator.generate({length: 12});
console.log("password", password);

```
In the example above, we're generating a password that's 12 characters long. You can customize the length of the password by passing a different number as the first argument to the generate method.

## Available options
Any of these can be passed into the options object for each function.
| Name  | Description  | Default Value |
| :------------ |:---------------:| -----:|
| length      | Integer, length of password. | 10 |
| numbers*	      | Boolean, put numbers in password. |   true |
| lowercase*	 | Boolean, put lowercase in password. |   true |
| uppercase* | Boolean, use uppercase letters in password. | true |

## API
Password Generator has a simple API that consists of a single method:

generate(length: number): string
Generates a random password with the specified length. The password will include a mix of uppercase and lowercase letters and numbers.

## Arguments
length (required): The length of the password to generate. Must be a positive integer.
Return Value
Returns a string representing the generated password.

## Contributing
Contributions to Password Generator are always welcome! If you have an idea for a feature or find a bug, please open an issue on GitHub or submit a pull request with your changes.

## License
Password Generator is released under the MIT license. See LICENSE.md for more information.

## License

[MIT](https://choosealicense.com/licenses/mit/)
