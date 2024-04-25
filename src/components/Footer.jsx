import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t, i18n } = useTranslation()

  return (
    <footer className="sticky bottom-0 w-full">
        <section>
            <div className="bg-lightblue p-6">
                <h2 className="text-lg text-darkblue">{t("footer.join")}</h2>
                <input type="text" placeholder={t("footer.placeholder")} className="rounded-md"/>
                <button className="text-darkblue bg-steelblue px-8 py-1 rounded-3xl transition hover:text-white ml-2">{t("footer.sign")}</button>
            </div>

            <div className="flex flex-col gap-2 text-center sm:text-left bg-steelblue p-6">
              <label className="text-darkblue text-lg font-semibold">{t("footer.studio")}</label>
              <ul className="flex flex-col gap-2 text-darkblue">
                <li>{t("footer.office")}</li>
                <li>Stadsgatan 4</li>
                <li>111 11 Stockholm</li>
                <li>+46 1234</li>
                <li>info@ystudio.com</li>
              </ul>
            </div>

            <div className="text-center sm:text-left bg-steelblue p-6">
              <p className="text-lg font-semibold text-darkblue">{t("footer.shop")}</p>

              <nav className="mt-2">
                <ul className="gap-2">
                  <li>
                    <a className="text-darkblue transition hover:text-white" href="/">
                    {t("footer.props")}
                    </a>
                 </li>

                 <li>
                   <a className="text-darkblue transition hover:text-white" href="/">
                   {t("footer.clothing")}
                  </a>
                 </li>

                 <li>
                   <a className="text-darkblue transition hover:text-white" href="/">
                   {t("footer.reading")}
                   </a>
                 </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left bg-steelblue p-6">
              <p className="text-lg font-semibold text-darkblue">{t("footer.privacy")}</p>

              <nav className="mt-2">
                <ul className="gap-2">
                  <li>
                    <a className="text-darkblue transition hover:text-white" href="/">
                      {t("footer.conditions")}
                    </a>
                 </li>
                </ul>
              </nav>
            </div>
          
            <div className="bg-steelblue p-6">
                <p>{t("footer.about")}</p>
                <p>{t("footer.contact")}</p>
                <p>{t("footer.shop")}</p>
                <p>{t("footer.privacy")}</p>
            </div>

            <div className="bg-steelblue p-6 text-center sm:text-left">
            <select name="" id="" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)} className="bg-steelblue border-darkblue rounded-md">
              <option value="" selected disabled>{t("footer.select")}</option>
              <option value="en">{t("footer.en")}</option>
              <option value="sv">{t("footer.sw")}</option>
            </select>
            </div>

        </section>
    </footer>
  )
}

/*<div className="bg-steelblue p-6">
<select name="" id="" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)} className="bg-steelblue border-none">
    <option value="" disabled selected>{t("footer.select")}</option>
    <option value="en">{t("footer.en")}</option>
    <option value="sv">{t("footer.sw")}</option>
</select>
</div>*/

/*<div className="bg-steelblue text-center sm:text-left p-6">
<button onClick={() => changeLanguage("en")} className="border-2 border-beige text-beige transition hover:text-darkblue hover:border-darkblue">{t("footer.en")}</button>
<button onClick={() => changeLanguage("sv")} className="border-2 border-beige text-beige transition hover:text-darkblue hover:border-darkblue ml-2">{t("footer.sw")}</button>
</div>*/

/*const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }*/
