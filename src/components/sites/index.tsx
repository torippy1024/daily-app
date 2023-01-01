import {useState, MouseEventHandler} from 'react';
import useSites from '../../hooks/useSites';
import DateInput from '../DateInput';

const SitesContainer = () => {
  const [date, setDate] = useState(new Date());
  const sites = useSites(date);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    sites.map((site) => {
      window.open(site.url, '_blank');
    });
  };

  return (
    <div>
      <DateInput date={date} setDate={setDate} />
      <button className='btn my-2' onClick={handleClick}>
        Open Links
      </button>
    </div>
  );
};

export default SitesContainer;
