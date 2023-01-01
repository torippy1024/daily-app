import {format} from 'date-fns';
import ja from 'date-fns/locale/ja';
import {useState, useEffect, Dispatch, SetStateAction} from 'react';
import {SITES} from '../const/sites';

export type SitesType = {
  name: string;
  baseUrl: string;
  url: string;
  checked: boolean;
}[];

const useSites = (
  date: Date,
): [SitesType, Dispatch<SetStateAction<SitesType>>] => {
  const [sites, setSites] = useState(
    SITES.map((site) => ({
      name: site.name,
      baseUrl: site.baseUrl,
      url: site.exampleUrl,
      checked: true,
    })),
  );

  const formatDateSite = (baseUrl: string, date: Date) => {
    return baseUrl
      .replace('[yyyy]', format(date, 'yyyy', {locale: ja}))
      .replace('[MM]', format(date, 'MM', {locale: ja}))
      .replace('[dd]', format(date, 'dd', {locale: ja}));
  };

  useEffect(() => {
    setSites((sites) =>
      sites.map((site) => ({
        ...site,
        url: formatDateSite(site.baseUrl, date),
      })),
    );
  }, [date]);

  return [sites, setSites];
};

export default useSites;
