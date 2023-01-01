import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Dispatch, SetStateAction} from 'react';
import {format} from 'date-fns';
import ja from 'date-fns/locale/ja';
import {AiOutlineCalendar} from 'react-icons/ai';

type DateInputType = {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
};

const DateInput = ({date, setDate}: DateInputType) => {
  const handleChange = (date: Date) => {
    setDate(date);
  };

  const formatDate = (date: Date) => {
    return format(date, 'yyyy/MM/dd(E)', {locale: ja});
  };

  return (
    <ReactDatePicker
      selected={date}
      onChange={handleChange}
      customInput={
        <div className='inline-flex items-stretch justify-start cursor-pointer'>
          <div className='text-2xl border rounded-l-xl border-gray-400 bg-base-100 p-2'>
            {formatDate(date)}
          </div>
          <div className='border rounded-r-xl border-primary flex items-center p-2 text-base-100 bg-primary'>
            <AiOutlineCalendar size={24} />
          </div>
        </div>
      }
    />
  );
};

export default DateInput;
