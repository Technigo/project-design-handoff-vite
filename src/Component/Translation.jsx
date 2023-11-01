import { useTranslation } from 'react-i18next'

export const Translation = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }


  return (
  <>
  <h1>{t("head1")}</h1>
  <button onClick={() => changeLanguage("en")}>English</button>
  <button onClick={() => changeLanguage("es")}>Spanish</button>
  <button onClick={() => changeLanguage("sv")}>Swedish</button>
  </>
  )  
}