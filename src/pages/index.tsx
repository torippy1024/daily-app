import type {NextPage} from 'next';
import Layout from '../components/layouts/Layout';
import {useState, MouseEventHandler} from 'react';
import DateInput from '../components/DateInput';

const Home: NextPage = () => {
  const [date, setDate] = useState(new Date());

  const sites = [
    {
      name: 'photo',
      url: 'https://photos.google.com/u/1/search/_d20221225_',
    },
    {
      name: 'calendar',
      url: 'https://calendar.google.com/calendar/u/0/r/day/2022/12/26',
    },
  ];

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    sites.map((site) => {
      window.open(site.url, '_blank');
    });
  };

  return (
    <Layout>
      <DateInput date={date} setDate={setDate} />
      <button onClick={handleClick}>hoge</button>
    </Layout>
  );
};

export default Home;
