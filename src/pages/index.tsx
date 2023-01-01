import type {NextPage} from 'next';
import Layout from '../components/layouts/Layout';
import {useState, MouseEventHandler} from 'react';
import DateInput from '../components/DateInput';
import useSites from '../hooks/useSites';

const Home: NextPage = () => {
  const [date, setDate] = useState(new Date());
  const sites = useSites(date);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    sites.map((site) => {
      window.open(site.url, '_blank');
    });
  };

  return (
    <Layout>
      <DateInput date={date} setDate={setDate} />
      <button className='btn my-2' onClick={handleClick}>
        Open Links
      </button>
    </Layout>
  );
};

export default Home;
