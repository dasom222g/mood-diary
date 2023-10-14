import React, { FC } from "react";

interface LayoutPrpos {
  children: React.ReactNode;
}

const Layout: FC<LayoutPrpos> = ({ children }) => {
  // style={{ backgroundImage: 'url(/images/bg.svg)' }}
  return (
    <div className="h-full overflow-hidden py-6 px-4 bg-[url(../public/images/bg.svg)] text-mood-gray-700">
      <div className="h-full overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
