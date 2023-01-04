import {useState, MouseEventHandler} from 'react';
import useSites from '../../hooks/useSites';
import CheckBoxList from '../common/CheckBoxList';
import DateInput from '../DateInput';

const SitesContainer = () => {
  const [date, setDate] = useState(new Date());
  const [sites, setSites] = useSites(date);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    sites.map((site) => {
      if (site.checked) {
        window.open(site.url, '_blank');
      }
    });
  };

  return (
    <div>
      <DateInput date={date} setDate={setDate} />
      <button className='btn my-2' onClick={handleClick}>
        Open Links
      </button>
      <CheckBoxList sites={sites} setSites={setSites} />
    </div>
  );
};

export default SitesContainer;
