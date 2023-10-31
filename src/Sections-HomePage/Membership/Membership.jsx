import "./membership.css"

export const Membership = () => {
  return (
    <section className="membership-section">
      <div className="membership-wrapper">

    <div className="membership-card first-time">
        <h1>FIRST-TIMER</h1>
      <img src="/Images/first-timer.png" alt="" />
      <p>-READ MORE</p>
    </div>

    <div className="membership-card membership">
        <h1>MEMBERSHIP</h1>
      <img src="/Images/memberships.png" alt="" />
      <p>-READ MORE</p>
    </div>
</div>
    </section>
  )
}
