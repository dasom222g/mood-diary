import React, { FC } from 'react';

interface LayoutPrpos {
  children: React.ReactNode;
}

const Layout: FC<LayoutPrpos> = ({ children }) => {
  return <div className="h-full overflow-hidden py-6 px-4">{children}</div>;
};

export default Layout;
