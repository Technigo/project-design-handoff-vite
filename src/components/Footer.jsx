import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t, i18n } = useTranslation()
  
  return (
    <footer className="bottom-0 mt-2 w-full font-Inter text-darkblue">
      <section>
        <div className="bg-lightblue max-w-[100vw] h-[148px]  pl-[5vw] pt-[45px] tablet:pl-[35vw] desktop:pl-[40vw]">
          <h2 className="text-lg pb-1 ml-[0vw] ">{t("footer.join")}</h2>
          <div className=" flex flex-row ">
            <input type="text" placeholder={t("footer.placeholder")} className=" bg-lightblue border border-darkblue max-h-8 max-w-[60vw] rounded-2xl text-center text-darkblue  my-2" />
            <button className=" bg-steelblue px-4 py-0.5 rounded-3xl font-semibold transition hover:text-beige ml-3 my-2 max-h-8  ">{t("footer.sign")}</button>
          </div>
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
        <div className="bg-steelblue w-full desktop:flex desktop:items-center desktop:justify-center p-1">
          <ul className="hidden desktop:flex flex-row justify-center mb-2 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-20">
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

          <div className="text-center desktop:mb-2 desktop:ml-10">
            <select name="" id="" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)} className="bg-steelblue border-4 border-darkblue rounded-2xl p-1">
              <option value="en">{t("footer.en")}</option>
              <option value="sv">{t("footer.sw")}</option>
            </select>
          </div>
        </div>
        <div className="bg-steelblue text-center  py-2 desktop:text-left desktop:py-0">
          <p className="text-xs text-darkblue md:text-sm">Copyright &copy; 2024 Y Studio Stockholm</p>
        </div>
      </section>
    </footer>
  )
}

