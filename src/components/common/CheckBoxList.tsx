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
  const [checkedItems, setCheckedItems] = useState<{[key in string]: boolean}>(
    {},
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked,
    });
  };

  const sendData: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log(checkedItems);
  };

  return (
    <>
      <form>
        {names.map((name, index) => {
          return (
            <label
              key={`key_${index}`}
              className='flex items-center justify-start my-2'
            >
              <CheckBox
                id={`id_${index}`}
                value={name}
                onChange={handleChange}
                checked={checkedItems[name]}
                className='mr-2'
              />
              <div>{name}</div>
            </label>
          );
        })}
        <button onClick={sendData}>アンケート送信ボタン</button>
      </form>
    </>
  );
};

export default CheckBoxList;
