import { InfoPageHeadings } from "./InfoPageHeadings"
import { useTranslation } from "react-i18next";

export const OpeningHours = () => {

    const { t } = useTranslation(); // Add useTranslation() function to access 't' function
    const infoPage = t("infoPage", { returnObjects: true })

    //no use of {t()} -instead t() when writing pure js:
    const firstHeading = t(infoPage.openingHours);
    const secondHeading = t(infoPage.subway);
    const thirdHeading = t(infoPage.car);

    return (
        <div className="bg-white flex flex-col items-start justify-center p-4 mx-8 my-8">
            <div className="text-xs text-grey text-sourcesans3 font-normal">
                <InfoPageHeadings InfoPageHeading={firstHeading} />

                <p>{t('infoPage.opening_hours_text')}</p>
                <br />
                <p>{t("infoPage.mail")}</p>
                <br />
                <p>Hagagatan 16 </p>
                <p>113 48 Stockholm</p>
                <br />
                <p>073-7624047</p>
                <br />
                <p>info@nordicpoleacademy.com</p>
                <br />

                <InfoPageHeadings InfoPageHeading={secondHeading} />
                <p>Odenplan</p>
                <br />
                <InfoPageHeadings InfoPageHeading={thirdHeading} />
                <p>{t('infoPage.parking')}</p>
            </div>

        </div>
    )
}
