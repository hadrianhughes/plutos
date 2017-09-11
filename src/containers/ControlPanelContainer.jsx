import React from 'react';
import { connect } from 'react-redux';

import { actToggleDashView } from '../actions/Dash.js';

import ControlPanel from '../components/ControlPanel.jsx';

const mapStateToProps = state => ({
  incomeView: state.Dash.incomeView,
  labelViewOutgoings: 'Outgoings',
  labelViewIncome: 'Income'
});

const mapDispatchToProps = dispatch => ({
  onToggleView: () => dispatch(actToggleDashView())
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
