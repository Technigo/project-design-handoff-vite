import { useTranslation } from 'react-i18next';
import "../Translation";
import { VisitUsImage } from "./VisitUsComponents/VisitUsImage";

export const VisitUs = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };

    return (
        <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-0 lg:text-lg">
            <div className="flex flex-col justify-center">
                <div className="text-center pt-2"> {/* Reduced top padding */}
                    <h1 className="text-6xl">{t("visitUs")}</h1>
                </div>
                <div className="text-center sm:ml-0 mr-0 text-sm grid grid-cols-2 md:grid-cols-2 gap-1 lg:text-left lg:ml-48 mr-5 mt-5">
                    <div>
                        <p className="p-2 custom-font">Stockholm <br /><br />Tjärhovsgatan 4 <br />116 21,<br /> Stockholm</p>
                    </div>

                    <div>
                        <p className="p-2 custom-font">Gothenburg <br /><br />Thisingsgatan 28 <br />417 03<br /> Göteborg</p>
                    </div>

                    <div>
                        <p className="p-2 custom-font">Oslo <br /><br />Trostockgata 66 <br />0194 Oslo<br /> Norge</p>
                    </div>

                    <div>
                        <p className="p-2 custom-font">New York <br /><br />52 Irving Pl<br /> New York <br />NY 10003, USA</p>
                    </div>
                </div>

                <div className="text-center pt-2 mb-10 mt-5"> {/* Reduced top padding */}
                    <h1 className="text-6xl pb-2">{t("contactUs")}</h1> {/* Reduced bottom padding */}
                    <p className="custom-font">Email: support@groundzero.com</p>
                    <p className="custom-font">Phone: +46 001 89 89 10</p>
                </div>
            </div>
            <VisitUsImage />
        </div>
    );
}

