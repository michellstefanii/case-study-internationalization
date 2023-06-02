'use client'

import { redirectedPathName } from "@/utils/language"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

export default function ButtonLanguage() {
  const pathName = usePathname()
  const router = useRouter()

  const handleChangeLanguage = (lang: string) => {
    router.replace(redirectedPathName(lang, pathName))
  }

  return (
    <>
      <button onClick={() => handleChangeLanguage('pt')}>PT-BR</button>
      <button onClick={() => handleChangeLanguage('en')}>EN-US</button>
    </>
  )
}