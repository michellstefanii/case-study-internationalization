import { useEffect } from "react"
import { useRouter } from "next/router"
import { LanguageSelected, DetectLanguage, ChangeLanguage } from '../utils/language'

export default function Home() {
  const t = LanguageSelected()
  const router = useRouter()

  useEffect(() => {
    DetectLanguage(router)
  }, [router])

  return (
    <div>
      <div>
        {t.app.text}
      </div>
      <section>
        <button onClick={() => ChangeLanguage('pt', router)}>PT-BR</button>
        <button onClick={() => ChangeLanguage('en', router)}>EN-US</button>
      </section>
    </div>
  )
}
