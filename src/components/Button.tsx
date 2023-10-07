import React, { FC } from 'react';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit';
  formId?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, type, formId, onClick }) => {
  //logic

  // view
  return (
    <>
      {type === 'submit' ? (
        <button
          type={type}
          className="w-full py-4 px-1 block rounded-3xl text-white text-sm font-medium bg-mood-blue-700"
          form={formId}
        >
          {text}
        </button>
      ) : (
        <button
          type={'button'}
          className="w-full py-4 px-1 block rounded-3xl text-white text-sm font-medium bg-mood-blue-700"
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
