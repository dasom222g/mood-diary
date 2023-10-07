import React, { FC, useEffect, useState } from 'react';

interface DirayInputProps {
  isReset: boolean;
  onChage: (value: string) => void;
}

const DiaryInput: FC<DirayInputProps> = ({ isReset, onChage }) => {
  // logic
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChage(value);
    setValue(value);
  };

  useEffect(() => {
    isReset && setValue('');
  }, [isReset]);
  // view
  return (
    <>
      <input
        type="text"
        placeholder="일기를 써주세요"
        className="bg-mood-purple w-full rounded-md py-2 px-4"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default DiaryInput;
