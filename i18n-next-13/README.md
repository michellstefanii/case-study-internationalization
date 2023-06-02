# Next.js 13 Internationalization (i18n) Implementation

This repository contains a Next.js project setup with server-side internationalization using the libraries `@formatjs/intl-localematcher`, `negotiator`, and `server-only`. This setup is designed to be extensible and scalable, making it simple to add more languages and translations.

## Libraries Used

- [@formatjs/intl-localematcher](https://www.npmjs.com/package/@formatjs/intl-localematcher): This library is used to match the best locale from the ones provided by the client's browser to the ones supported by the application.
- [negotiator](https://www.npmjs.com/package/negotiator): An HTTP content negotiator for Node.js. Used to parse the `Accept-Language` header from the client's request.
- [server-only](https://github.com/zeit/next-plugins/tree/master/packages/next-server-components): This is a Next.js plugin that allows you to use server components in your application.

## Project Structure

The project is organized in the following way:

- `src/public/locales`: Contains the translation files for each language (e.g., `en.ts`, `pt.ts`).
- `src/app`: Contains the main app components, which are also divided by language (e.g., `[lang]/page.tsx` and `[lang]/layout.tsx`).
- `src/components`: Contains shared components, like the `ButtonLanguage` component that lets the user change the current language.
- `src/utils`: Contains utility functions, like `language.ts` which helps with URL redirection when changing languages.
- `i18n-config.ts`: Defines the supported locales for the application.
- `get-dictionary.ts`: Function to dynamically import the correct dictionary based on the locale.
- `middleware.ts`: Middleware to redirect the user to the correct locale based on their browser preferences.
- `next.config.js`: Next.js configuration file.

## Usage

1. Clone this repository
2. Run `npm install` to install the dependencies
3. Start the development server with `npm run dev`


Now you can open http://localhost:3000 in your browser to see the result.

## How to Add a New Language
1. Add the new locale in the i18n-config.ts file.
2. Create a new translation file in src/public/locales (e.g., fr.ts for French).
3. Add the new language pages in src/app (e.g., [fr]/page.tsx and [fr]/layout.tsx).
4. Add the new language button in src/components/ButtonLanguage.ts.

## License

This project is open source and available under the [MIT License](LICENSE).




