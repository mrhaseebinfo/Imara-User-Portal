import { useState } from "react";
import Calendar from "react-calendar";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const MyCustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setDate}
        value={date}
        nextLabel={<IoIosArrowForward className="custom-arrow" />}
        prevLabel={<IoIosArrowBack className="custom-arrow" />}
        next2Label={null}
        prev2Label={null}
        className="custom-calendar"
      />
    </div>
  );
};

export default MyCustomCalendar;
