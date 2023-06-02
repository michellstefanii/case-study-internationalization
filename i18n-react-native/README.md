# Internationalization (i18n) Example with React Native, Expo and i18n-js

This repository contains a React Native project set up with client-side internationalization using `expo-localization` and `i18n-js`. 

## Libraries Used

- [expo-localization](https://docs.expo.io/versions/latest/sdk/localization/): An Expo library that provides the locale information of the user's device.
- [i18n-js](https://github.com/fnando/i18n-js): A small library to provide the Rails I18n API on the JavaScript.

## Project Structure

- `locales`: Contains the translation files for each language (e.g., `en.js`, `pt.js`). 
- `i18n.js`: Main i18n setup file which initializes `i18n-js` with the appropriate configuration.
- `App.js`: Main application component which uses the `i18n` object to localize text and a function to change the language.

## Usage

1. Clone this repository.
2. Run `npm install` to install the dependencies
3. Start the development server with `npm start`


## How to Add a New Language
1. Create a new translation file in locales (e.g., fr.js for French).
2. Add the new translations to the i18n.js file.
3. Add a new button in App.js to switch to the new language.

## License

This project is open source and available under the [MIT License](LICENSE).




