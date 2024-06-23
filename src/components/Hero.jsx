import searchIcon from '/assets/search-icon.svg'
import menuIcon from '/assets/menu-icon.svg'
import { Link } from 'react-scroll';
import { useTranslation } from "react-i18next"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { startOfDay } from 'date-fns';

// we dont want to work on weekends so lets limit the calendar to weekdays only
const isWeekday = (date) => {
  const day = date.getDay();
  return day !== 0 && day !== 6;
};

// we only want to allow bookings at specific times because we need to rest
const customTimeSlots = [9, 11.5, 13, 15.5, 17].map(hour => {
  const date = new Date();
  date.setHours(Math.floor(hour), (hour % 1) * 60, 0, 0);
  return date;
});

// check if the selected date is within the custom time slots
const isWithinCustomTimeSlots = (date) => {
  if (!isWeekday(date)) {
    return false;
  }
  return customTimeSlots.some(slot =>
    date.getHours() === slot.getHours() &&
    date.getMinutes() === slot.getMinutes()
  );
};

export const Hero = ({ heroImg }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { t } = useTranslation()
  const bookMessage = t("cta.message");
  // Calculate today's date set to the start of the day
  const today = startOfDay(new Date());

  const highlightedDates = [new Date(), new Date().setDate(new Date().getDate() + 5)]; //highlight available dates

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPhoneNumber('');
    setFeedbackMessage('');
    setShowForm(false);
  };

  const handleBookingClick = () => {
    if (showCalendar) {
      setShowForm(true); // Show the form when the calendar is already visible
      setShowCalendar(false); // Hide the calendar
    } else {
      setShowCalendar(!showCalendar); // toggle the calendar visibility if the form is not involved
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFeedbackMessage(`${bookMessage} ${date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // use 24-hour format
    })}`);
  };

  return (
    <>
      <div className=" flex flex-wrap justify-center w-screen ">
        <div className=" pl-0 ml-0 grid grid-cols-6 min-h-[375px] min-w-[320px] auto-rows-auto md:pb-[500px] lg:pb-[500px]" style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="flex flex-wrap justify-start col-start-1 font-Roboto font-semi-bold ">
            <div className="text-center md:px-5  lg:px-7">
              <a className='cursor-pointer' href="#">
                <h1 className="ml-3 text-[40px] mb-[-15px] md:text-[78px] md:mt-[-10px]  lg:text-[120px] lg:mb-[-45px]" >Y</h1>
                <h4 className="ml-3 text-[10px] md:text-[20px] md:mt-[-30px] lg:text-[40px] mt-0">Studio</h4>
              </a>
            </div>
          </div>
          <div className="col-start-6 row-start-1 ">
            <div className="flex flex-wrap justify-end mr-3 mt-3  lg:py-7  ">
              <img className="w-[19px] md:w-[24px] lg:w-[38px]" src={searchIcon} alt="search-icon" /> <img className="w-[19px] md:w-[33px] lg:w-[38px]" src={menuIcon} alt="menu-icon" />
            </div>
          </div>
          <div className=" font-roboto  grid-row-start-3 col-start-1 col-span-2  min-w-60  md:min-w-80 lg:min-w-96 ml-16 md:mt-[100px] lg:mt-40">
            <Link to="Philosophy" smooth={true} duration={500}>
              <h1 className="cursor-pointer text-[28px] md:ml-16 md:text-[36px] lg:text-[82px] lg:font-bold lg:min-w-[600px]  ">{t("HeaderText.mainText")}</h1>
            </Link>
            <h3 className="text-[17px] md:ml-16  md:text-[25px] lg:text-[49px] lg:min-w-[600px]">{t("HeaderText.subText")}</h3>

            <button
              className="cursor-pointer text-[11px] md:ml-16 md:mt-2 md:text-[15px] lg:text-[35px] bg-darkblue hover:bg-steelblue active:bg-[#909394] text-yogawhite font-bold px-3 py-1 rounded-[15px] lg:rounded-[40px] lg:py-2 lg:px-5 lg:mt-2"
              onClick={handleBookingClick}
            >
              {t("cta.book")}
            </button>
            {showCalendar && (
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                showTimeSelect
                highlightDates={highlightedDates}
                filterDate={isWeekday}
                filterTime={isWithinCustomTimeSlots}
                timeFormat="HH:mm"
                includeTimes={customTimeSlots}
                timeCaption="time"
                dateFormat="MMMM d, yyyy HH:mm"
                minDate={today}
                inline
              />
            )}
            {showForm && (
              <form className="  my-6 bg-beige flex flex-col py-4 px-4 rounded-[20px] desktop:mx-16  " onSubmit={handleSubmit}>
                {feedbackMessage && <div className="inline-block text-[10px] bg-yogawhite px-4 py-2 my-2 rounded-md desktop:ml-14">{feedbackMessage}</div>}
                <input className="my-2  px-2 rounded" type="text" value={name} onChange={e => setName(e.target.value)} placeholder={t("input.name")} required />
                <input className="my-2 px-2 rounded" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t("input.email")} required />
                <input className="my-2 px-2 rounded" type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder={t("input.phone")} required />
                <button className=" my-2 cursor-pointer text-[11px] md:ml-16 md:mt-2 md:text-[15px] lg:text-[35px] bg-darkblue hover:bg-steelblue active:bg-[#909394] text-yogawhite font-bold px-3 py-1 rounded-[15px] lg:rounded-[40px] lg:py-2 lg:px-5 lg:mt-2" type="submit">{t("cta.confirm")}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
