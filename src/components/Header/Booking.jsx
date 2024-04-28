import { useState } from "react";

export const Booking = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDateTimeSelection = (date, time) => {
    const dateTime = `${date} at ${time}`;
    setSelectedDateTime(dateTime);
    setShowDropdown(false); 
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); 
  };

  return (
    <div className="w-fit-content flex flex-col mt-24 items-start text-darkblue z-3">
      <div>
        <div className="mb-2 lg:mb-4 font-Roboto font-semibold text-2xl md:text-4xl lg:text-4xl xl:text-4xl">
          Find your power
        </div>

        <div className="mb-4 lg:mb-5 font-roboto text-xl md:text-2xl lg:text-2xl">Anywhere. Anytime.</div>
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="py-2 px-4 bg-darkblue text-white rounded-full font-roboto font-semibold text-sm lg:text-base xl:text-lg"
          >
            {selectedDateTime ? `Book for ${selectedDateTime}` : "Book now"}
          </button>
          
          {showDropdown && (
            <div className="absolute top-10 bg-white shadow-md rounded-md py-2 mt-1">
              {/* Date picker */}
              <input
                type="date"
                onChange={(e) =>
                  handleDateTimeSelection(e.target.value, e.target.value)
                }
                className="cursor-pointer py-1 px-4 hover:bg-gray-200"
              />
              {/* Time picker */}
              <select
                onChange={(e) =>
                  handleDateTimeSelection(
                    e.target.parentElement.firstChild.value,
                    e.target.value
                  )
                }
                className="cursor-pointer py-1 px-4 hover:bg-gray-200"
              >
                <option value="">Select time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="2:00 PM">2:00 PM</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
