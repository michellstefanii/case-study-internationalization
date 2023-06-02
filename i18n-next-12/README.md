# Next.js 12 Internationalization (i18n) Implementation

This repository provides a simple implementation of internationalization (i18n) in a Next.js 12 application. The application is built to support English and Portuguese languages.

## Overview

This implementation uses `next/router` to manage routing and language switching in the Next.js application. The translations are handled in separate files for each language in the `public/locales` directory.

## Project Structure

Here's a basic overview of the project structure and some key files:

- `public/locales`: This directory contains the translation files for each supported language.
    - `en.ts`: This file contains translations for the English language.
    - `pt.ts`: This file contains translations for the Portuguese language.

- `next-i18next.config.js`: This file contains the configuration for the Next.js i18n routing feature.

- `next.config.js`: This is the main configuration file for the Next.js application.

- `utils/language.js`: This file contains helper functions to manage language switching and detection.

- `pages/index.js`: This is the main page of the application. It renders the translated text and provides buttons to switch between the supported languages.

## Usage

1. Clone this repository
2. Run `npm install` to install the dependencies
3. Start the development server with `npm run dev`

On the main page, you'll see a paragraph of text which is either in English or Portuguese based on the language selected. There are also two buttons, "PT-BR" and "EN-US", which you can use to switch between the two supported languages.

## Adding New Languages

To add support for a new language:

1. Add a new file in the `public/locales` directory with translations for the new language.
2. Add the new language to the `locales` array in the `next-i18next.config.js` file.
3. Add a new button in `pages/index.js` to allow switching to the new language.

## Note

Please be aware that this is a simple example for demonstrating the i18n capabilities of Next.js. In a real-world application, you might want to use a library like `next-i18next` or `react-intl` to manage translations and handle more complex use cases.

## License

This project is open source and available under the [MIT License](LICENSE).
