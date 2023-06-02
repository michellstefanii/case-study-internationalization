import { useTranslation } from "react-i18next";

const App = (): JSX.Element => {
  const { i18n, t } = useTranslation()

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language)
  }

  return (
    <body>
      <div>
        {t('app.text')}
      </div>
      <section>
        <button onClick={() => handleChangeLanguage('pt-br')}>PT-BR</button>
        <button onClick={() => handleChangeLanguage('en-us')}>EN-US</button>
      </section>
    </body>
  )
};

export default App;