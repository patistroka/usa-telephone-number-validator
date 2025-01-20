# usa-telephone-number-validator#

US Telephone Number Validator

This app validates US phone numbers in various formats using a regular expression. It checks if the phone number follows valid formats and outputs whether the number is valid or invalid.

## Supported Formats

- `1 555-555-5555`
- `1 (555) 555-5555`
- `1(555)555-5555`
- `5555555555`
- `555-555-5555`
- `(555)555-5555`

The country code should be `1` if provided, and the area code is required.

## Features

- **Input Validation:** Alerts the user to enter a phone number if left blank.
- **Clear Button:** Clears the validation results.
- **Validation Logic:** Uses a regular expression to validate various phone number formats.
  - Valid formats include variations with or without spaces, dashes, and parentheses.
  - Invalid numbers include incorrect formats, extra characters, or missing parts.

### Example Valid Inputs:
- `1 555-555-5555`
- `1 (555) 555-5555`
- `5555555555`

### Example Invalid Inputs:
- `5555555`
- `123**&!!asdf#`
- `(6054756961)`

## How it Works

- **Check Button:** Triggers the validation of the phone number in the input field.
- **Clear Button:** Clears the validation message.

The app will display either a message confirming the number is valid or invalid in the `#results-div`.

## Technologies Used

- HTML
- CSS
- JavaScript

## License

This project is licensed under the MIT License.
