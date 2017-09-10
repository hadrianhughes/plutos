import React from 'react';
import { connect } from 'react-redux';

import FinanceBar from '../components/FinanceBar.jsx';

const mapStateToProps = state => {
  return {
    incomeItems: state.Dash.incomeItems,
    totalIncome: state.Dash.totalIncome
  };
};

export default connect(mapStateToProps)(FinanceBar);
