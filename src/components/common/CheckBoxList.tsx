import React, {useState, ChangeEventHandler, MouseEventHandler} from 'react';

type CheckBoxType = {
  id: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

type CheckBoxListType = {
  names: string[];
};

type ItemsType = {
  name: string;
  checked: boolean;
}[];

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

const CheckBoxList = ({names}: CheckBoxListType) => {
  const [items, setItems] = useState<ItemsType>(
    names.map((name) => ({
      name,
      checked: true,
    })),
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setItems((items) =>
      items.map((item) => ({
        ...item,
        checked: e.target.id === item.name ? e.target.checked : item.checked,
      })),
    );
  };

  const sendData: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log(items);
  };

  return (
    <div>
      {items.map((item) => (
        <label key={item.name} className='flex items-center justify-start my-2'>
          <CheckBox
            id={item.name}
            value={item.name}
            onChange={handleChange}
            checked={item.checked}
            className='mr-2'
          />
          <div>{item.name}</div>
        </label>
      ))}
      <button onClick={sendData} className='btn btn-primary'>
        確認
      </button>
    </div>
  );
};

export default CheckBoxList;
