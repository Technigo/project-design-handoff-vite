import { MemberCard } from "./MemberCard"
import { useTranslation } from "react-i18next"
import "./Membership.css"

export const Membership = () => {

  const { t } = useTranslation();

  return (
    <section className='membership-section'>
        <h2>{t("home.membership.heading")}</h2>
        <h3>{t("home.membership.subHeading")}</h3>
        <MemberCard />
    </section>
  )
}
