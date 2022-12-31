import type {NextPage} from 'next';
import Layout from '../components/layouts/Layout';
import {useState} from 'react';
import DateInput from '../components/DateInput';

const Home: NextPage = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Layout>
      <DateInput date={date} setDate={setDate} />
    </Layout>
  );
};

export default Home;
