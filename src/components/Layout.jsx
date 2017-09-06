import React from 'react';

import Header from './Header.jsx';

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
