import "./membership.css"
import { useTranslation } from "react-i18next"

export const Membership = () => {
  const { t } = useTranslation()

  return (
    <section className="membership-section">
      <div className="membership-wrapper">

    <div className="membership-card first-time">
        <h1>{t("Membership.h1")}</h1>
      <img src="/Images/first-timer.png" alt="" />
      <p>{t("Membership.p")}</p>
    </div>

    <div className="membership-card membership">
        <h1>{t("Membership.h12")}</h1>
      <img src="/Images/memberships.png" alt="" />
      <p>{t("Membership.p")}</p>
    </div>
</div>
    </section>
  )
}
