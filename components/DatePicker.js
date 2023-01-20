import React, { useState } from 'react';
import { Calendar, DatePicker as DatePicker2 } from 'fixed-persian-datepicker';
import { Moment } from 'moment-jalaali';

// interface Props {
//   onDateChange: (date: Moment) => void;
// }

const DatePicker = (props) => {
  const [state, setState] = useState();
  return (
    <div>
      <DatePicker2
        onChange={(value) => {
          props.onDateChange(value);
          setState(value);
        }}
        timePicker={false}
        value={state}
        isGregorian={false}
      />
    </div>
  );
};

export default DatePicker;
