import React from 'react';

import '../styles/Dash.scss';

import FinanceBar from './FinanceBar.jsx';

const Dash = ({ portions }) => (
  <div className="Dash">
    <FinanceBar portions={portions} />
  </div>
);

export default Dash;
