import type {NextPage} from 'next';
import Layout from '../components/layouts/Layout';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react';
import {format} from 'date-fns';
import {AiOutlineCalendar} from 'react-icons/ai';

const Home: NextPage = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (date: Date) => {
    setDate(date);
  };

  const formatDate = (date: Date) => {
    return format(date, 'yyyy/MM/dd');
  };

  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
