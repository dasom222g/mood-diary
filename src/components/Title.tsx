import React, { FC } from 'react';

interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

const Title: FC<TitleProps> = ({ mainTitle, subTitle }) => {
  return (
    <div className="text-center">
      {subTitle && <span className="text-sm pb-1 block">{subTitle}</span>}
      <h3 className="text-lg relative">
        {mainTitle}
        <i className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-10">
          <img src="./images/marker.svg" alt="마커" />
        </i>
      </h3>
    </div>
  );
};

export default Title;
