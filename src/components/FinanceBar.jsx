import React from 'react';

import '../styles/FinanceBar.scss';

const FinanceBar = ({ incomeItems }) => (
  <div className="FinanceBar">
    {incomeItems.map(item => (
      <h1>{item.name}</h1>
    ))}
  </div>
);

export default FinanceBar;
