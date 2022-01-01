import { useState } from 'react';
import DatePicker from 'sassy-datepicker';

function Calendar() {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  return <DatePicker onChange={onChange} selected={date} />;
}

export default Calendar;
