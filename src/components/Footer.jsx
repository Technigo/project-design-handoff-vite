import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t, i18n } = useTranslation()

  return (
    <footer className="bottom-0 mt-2 w-full font-Inter text-darkblue">
        <section>
            <div className="bg-lightblue p-6 text-center">
                <h2 className="text-lg pb-1">{t("footer.join")}</h2>
                <input type="text" placeholder={t("footer.placeholder")} className="bg-lightblue border border-darkblue py-0.5 rounded-2xl text-center text-darkblue max-sm:w-3/5"/>
                <button className=" bg-steelblue px-4 py-0.5 rounded-3xl font-semibold transition hover:text-beige ml-2">{t("footer.sign")}</button>
            </div>

            <div className="flex flex-col gap-2 text-center bg-steelblue p-4 desktop:hidden">
              <label className="text-lg font-semibold">{t("footer.studio")}</label>
              <ul className="flex flex-col">
                <li>{t("footer.office")}</li>
                <li>Stadsgatan 4</li>
                <li>111 11 Stockholm</li>
                <li>+46 1234</li>
                <li>info@ystudio.com</li>
              </ul>
            </div>

            <div className="text-center bg-steelblue p-4 desktop:hidden">
              <p className="text-lg font-semibold">{t("footer.shop")}</p>

              <nav className="mt-1">
                <ul className="gap-2">
                  <li>
                    <a className="transition hover:text-beige" href="/">
                    {t("footer.props")}
                    </a>
                 </li>

                 <li>
                   <a className="transition hover:text-beige" href="/">
                   {t("footer.clothing")}
                  </a>
                 </li>

                 <li>
                   <a className="transition hover:text-beige" href="/">
                   {t("footer.reading")}
                   </a>
                 </li>
                </ul>
              </nav>
            </div>

            <div className="text-center bg-steelblue p-4 desktop:hidden">
              <p className="text-lg font-semibold">{t("footer.privacy")}</p>

              <nav className="mt-1">
                <ul className="gap-2">
                  <li>
                    <a className="transition hover:text-beige" href="/">
                      {t("footer.conditions")}
                    </a>
                 </li>
                </ul>
              </nav>
            </div>
          
            <div className="bg-steelblue w-full desktop:flex desktop:items-center desktop:justify-around p-2">
                <ul className="hidden desktop:flex flex-row justify-center mb-2 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5">
                <li>
                    <a href="/" className="transition hover:text-beige">{t("footer.about")}</a>
                </li>
                <li>
                    <a href="/" className="transition hover:text-beige">{t("footer.contact")}</a>
                </li>
                <li>
                    <a href="/" className="transition hover:text-beige">{t("footer.shop")}</a>
                </li>
                <li>
                    <a href="/" className="transition hover:text-beige">{t("footer.privacy")}</a>
                </li>
                </ul>

                <div className="text-center desktop:mb-2">
                <select name="" id="" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)} className="bg-steelblue border-4 border-darkblue rounded-2xl p-1">
                    <option value="en">{t("footer.en")}</option>
                    <option value="sv">{t("footer.sw")}</option>
                </select>
                </div>
            </div>

            <div className="bg-steelblue text-center desktop:hidden py-2">
              <p className="text-xs text-darkblue md:text-sm">Copyright &copy; 2024 Y Studio Stockholm</p>
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


/* <option value="" selected disabled>{t("footer.select")}</option>*/
