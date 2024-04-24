import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <footer className="sticky bottom-0 w-full">
        <section>
            <div className="bg-lightblue p-6">
                <h2 className="text-lg text-darkblue">{t("footer.join")}</h2>
                <input type="text" placeholder={t("footer.placeholder")}/>
                <button className="text-darkblue bg-steelblue px-8 py-1 rounded-3xl transition hover:text-white">{t("footer.sign")}</button>
            </div>

            <div className="flex flex-col gap-6 text-center sm:text-left bg-steelblue p-6">
              <label className="text-darkblue text-lg font-semibold">Contact Y Studio</label>
              <ul className="flex flex-col gap-2 text-darkblue">
                <li>Head Office</li>
                <li>Stadsgatan 4</li>
                <li>111 11 Stockholm</li>
                <li>+46 1234</li>
                <li>info@ystudio.com</li>
              </ul>
            </div>

            <div className="text-center sm:text-left bg-steelblue p-6">
              <p className="text-lg font-semibold text-darkblue">Shop</p>

              <nav className="mt-2">
                <ul className="gap-2">
                  <li>
                    <a className="text-darkblue transition hover:text-white" href="/">
                      Yoga Props
                    </a>
                 </li>

                 <li>
                   <a className="text-darkblue transition hover:text-white" href="/">
                    Clothing
                  </a>
                 </li>

                 <li>
                   <a className="text-darkblue transition hover:text-white" href="/">
                     Reading
                   </a>
                 </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left bg-steelblue p-6">
              <p className="text-lg font-semibold text-darkblue">Privacy</p>

              <nav className="mt-2">
                <ul className="gap-2">
                  <li>
                    <a className="text-darkblue transition hover:text-white" href="/">
                      Conditions
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

            <div className="bg-steelblue text-center sm:text-left">
              <button onClick={() => changeLanguage("en")}>{t("footer.en")}</button>
              <button onClick={() => changeLanguage("sv")}>{t("footer.sw")}</button>
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
