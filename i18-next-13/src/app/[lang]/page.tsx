import ButtonLanguage from '@/components/ButtonLanguage';
import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import './globals.css'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const t = await getDictionary(lang);

  return (
    <body>
      <div>
        {t.text}
      </div>
      <section>
        <ButtonLanguage />
      </section>
    </body>
  )
}