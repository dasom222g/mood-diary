import React, { FC, useEffect, useState } from "react";

interface DirayInputProps {
  readonly?: boolean;
  value?: string;
  isReset: boolean;
  onChage?: (value: string) => void;
}

const DiaryInput: FC<DirayInputProps> = ({
  readonly,
  value,
  isReset,
  onChage,
}) => {
  // logic
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChage && onChage(value);
    setInput(value);
  };

  useEffect(() => {
    isReset && setInput("");
  }, [isReset]);
  // view
  return (
    <>
      <input
        type="text"
        placeholder="일기를 써주세요"
        className="bg-mood-purple w-full rounded-md py-2 px-4"
        value={value || input}
        readOnly={!!readonly}
        onChange={handleChange}
      />
    </>
  );
};

export default DiaryInput;
