import React from 'react';

import '../styles/Dash.scss';

import FinanceBarContainer from '../containers/FinanceBarContainer.jsx';

const Dash = ({ incomeItems }) => (
  <div className="Dash">
    <FinanceBarContainer />
  </div>
);

export default Dash;
