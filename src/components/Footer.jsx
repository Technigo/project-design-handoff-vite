import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t, i18n } = useTranslation()

  return (
    <footer className="bg-lightblue sticky bottom-0">
        <section>
            <div>
                <h2>{t("footer.join")}</h2>
                <input type="text" placeholder="e-mail address"/>
                <button className="text-darkblue bg-steelblue px-8 py-1 rounded-3xl">{t("footer.sign")}</button>
            </div>
            <div className="bg-steelblue">
                <p>{t("footer.about")}</p>
                <p>{t("footer.contact")}</p>
                <p>{t("footer.shop")}</p>
                <p>{t("footer.privacy")}</p>
            </div>
            <div className="bg-steelblue">
                <select name="" id="" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                    <option value="" disabled selected>{t("footer.select")}</option>
                    <option value="en">{t("footer.en")}</option>
                    <option value="sv">{t("footer.sw")}</option>
                </select>
            </div>
        </section>
    </footer>
  )
}
