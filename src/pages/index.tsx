import type {NextPage} from 'next';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react';

const Home: NextPage = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (date: Date) => {
    setDate(date);
  };

  return (
    <Layout>
      <ReactDatePicker
        selected={date}
        onChange={handleChange}
        customInput={<div>{date.toISOString().split('T')[0]}</div>}
      />
    </Layout>
  );
};

export default Home;
