# Internationalization (i18n) Example with React and i18next

This repository contains a React project set up with client-side internationalization using `i18next`, `react-i18next`, and `i18next-browser-languagedetector`. 

## Libraries Used

- [i18next](https://www.i18next.com/): A powerful internationalization framework for JavaScript which offers a complete solution to localize your product from web to mobile and desktop.
- [react-i18next](https://react.i18next.com/): A powerful internationalization framework for React / React Native which is based on i18next.
- [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector): A plugin for i18next to detect user language in the browser.

## Project Structure

- `src/public/i18n`: Contains the i18n setup file (`index.ts`) which initializes `i18next` with the appropriate configuration.
- `src/public/locales`: Contains the translation files for each language (e.g., `en-us`, `pt-br`). The `index.ts` file inside this directory exports all the translations.
- `src/App.tsx`: Main application component which uses the `useTranslation` hook from `react-i18next` to localize text and a function to change the language.

## Usage

1. Clone this repository
2. Run `npm install` to install the dependencies
3. Start the development server with `npm run dev`

Now you can open http://localhost:3000 in your browser to see the result.

## How to Add a New Language
1. Create a new translation file in src/public/locales (e.g., fr.ts for French).
2. Add the new translations to the index.ts file in src/public/locales.
3. Add a new button in src/App.tsx to switch to the new language.

## License

This project is open source and available under the [MIT License](LICENSE).




