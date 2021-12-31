import React, { useState } from 'react';
import { getTodayDate } from '../../utils/helpers';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = () => {
  const today = getTodayDate();

  return <input type="text" name="date" id="date" placeholder={today} />;
};

export default DateInput;

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// // import { useDispatch, useSelector } from 'react-redux';
// import 'react-datepicker/dist/react-datepicker.css';

// const DateInput = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   // const dispatch = useDispatch();
//   // const { clientAddress, clientName, clientEmail } = useSelector(
//   //   (state) => state.formReducer
//   // );

//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => {
//         setStartDate(date);
//         // console.log(date.getDate());
//       }}
//       id="date"
//     />
//   );
// };
