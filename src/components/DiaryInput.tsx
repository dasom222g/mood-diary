import React, { FC, useEffect, useRef, useState } from "react";

interface DirayInputProps {
  readonly?: boolean;
  value?: string;
  isReset: boolean;
  isFocus?: boolean;
  bgColor?: string;
  onChage?: (value: string) => void;
}

const DiaryInput: FC<DirayInputProps> = ({
  readonly,
  value,
  isReset,
  isFocus,
  bgColor,
  onChage,
}) => {
  // logic
  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChage && onChage(value);
    setInput(value);
  };

  useEffect(() => {
    isReset && setInput("");
  }, [isReset]);

  useEffect(() => {
    value && setInput(value);
  }, [value]);

  useEffect(() => {
    isFocus && inputRef.current && inputRef.current.focus();
  }, [isFocus]);

  // view
  return (
    <>
      <input
        type="text"
        placeholder="일기를 써주세요"
        className={`${bgColor || "bg-yellow-200"} w-full rounded-md py-2 px-4`}
        value={input}
        ref={inputRef}
        readOnly={!!readonly}
        onChange={handleChange}
      />
    </>
  );
};

export default DiaryInput;
