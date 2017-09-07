import React from 'react';

import '../styles/Dash.scss';

import FinanceBar from './FinanceBar.jsx';

const Dash = ({ incomeItems }) => (
  <div className="Dash">
    <FinanceBar incomeItems={incomeItems} />
  </div>
);

export default Dash;
