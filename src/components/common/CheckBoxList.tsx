import React, {ChangeEventHandler, Dispatch, SetStateAction} from 'react';
import {SitesType} from '../../hooks/useSites';
import ExternalLink from './ExternalLink';

type CheckBoxType = {
  id: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

type CheckBoxListType = {
  sites: SitesType;
  setSites: Dispatch<SetStateAction<SitesType>>;
};

const CheckBox = ({
  id,
  value,
  checked,
  onChange,
  className = '',
}: CheckBoxType) => {
  return (
    <input
      id={id}
      type='checkbox'
      name='inputNames'
      checked={checked}
      onChange={onChange}
      value={value}
      className={`checkbox ${className}`}
    />
  );
};

const CheckBoxList = ({sites, setSites}: CheckBoxListType) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSites((sites) =>
      sites.map((site) => ({
        ...site,
        checked: e.target.id === site.name ? e.target.checked : site.checked,
      })),
    );
  };

  return (
    <div>
      {sites.map((site) => (
        <label key={site.name} className='flex items-center justify-start my-2'>
          <CheckBox
            id={site.name}
            value={site.name}
            onChange={handleChange}
            checked={site.checked}
            className='mr-2'
          />
          <ExternalLink href={site.url}>{site.name}</ExternalLink>
        </label>
      ))}
    </div>
  );
};

export default CheckBoxList;
