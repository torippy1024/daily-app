import {format} from 'date-fns';
import {useState, useEffect} from 'react';
import {SITES} from '../components/const/sites';

const useSites = (date: Date) => {
  const [sites, setSites] = useState(
    SITES.map((site) => ({
      name: site.name,
      baseUrl: site.baseUrl,
      url: site.exampleUrl,
    })),
  );

  const formatDateSite = (baseUrl: string, date: Date) => {
    return baseUrl
      .replace('[yyyy]', format(date, 'yyyy'))
      .replace('[MM]', format(date, 'MM'))
      .replace('[dd]', format(date, 'dd'));
  };

  useEffect(() => {
    setSites((sites) =>
      sites.map((site) => ({
        ...site,
        url: formatDateSite(site.baseUrl, date),
      })),
    );
  }, [date]);

  return sites;
};

export default useSites;
