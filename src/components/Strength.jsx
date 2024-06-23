import { useTranslation } from "react-i18next"

const StrengthItem = ({ imageSrc, titleKey, textKey }) => {
  const { t } = useTranslation()

  return (
    <div className="">
      <img className="float-left mr-3 max-w-[120px] md:max-w-[350px] lg:max-w-[600px]" src={imageSrc} alt={t(titleKey)} />
      <h2 className="text-lg tablet:text-2xl desktop:text-3xl font-semibold">{t(titleKey)}</h2>
      <p className="text-base tablet:text-xl desktop:text2xl overflow-auto">{t(textKey)}</p>
    </div>
  )
}

export const Strength = () => {
  return (
    <section className="flex flex-col justify-center p-2 gap-6 mx-auto  max-w-[95vw] tablet:mx-auto tablet:max-w-[95vw]  desktop:max-w-[1290px] font-Inter mb-8">
      <StrengthItem imageSrc="/images/strength1.svg" titleKey="articles.buildTitle" textKey="articles.buildText" />
      <StrengthItem imageSrc="/images/strength2.svg" titleKey="articles.locationTitle" textKey="articles.locationText" />
      <StrengthItem imageSrc="/images/strength3.svg" titleKey="articles.scheduleTitle" textKey="articles.scheduleText" />
    </section>
  )
}
