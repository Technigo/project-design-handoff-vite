import moment from "moment"
const fullDate = moment().format("dddd Do MMM")


export const DateDisplay = () => {
  return (
    <h3>Today, {fullDate}</h3>
  )
}
