import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const DatePicker= () => (
    <div>
        <TimePicker
            hintText="시작기간"
        />
        <TimePicker
            hintText="종료기간"
        />
    </div>
);

export default DatePicker;
       