import React from 'react';

import '../styles/Dash.scss';

import FinanceBarContainer from '../containers/FinanceBarContainer.jsx';
import ControlPanelContainer from '../containers/ControlPanelContainer.jsx';

const Dash = () => (
  <div className="Dash">
    <FinanceBarContainer />
    <ControlPanelContainer />
  </div>
);

export default Dash;
