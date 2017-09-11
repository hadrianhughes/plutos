import React from 'react';
import { connect } from 'react-redux';

import { actControlButtonClick } from '../actions/Dash.js';

import CTACollection from '../components/CTACollection.jsx';

const mapStateToProps = state => ({
  classes: 'ControlPanel',
  buttons: [
    {
      classes: 'ControlPanel__button',
      eventId: 'TOGGLE_DASH_VIEW',
      label: state.Dash.incomeView ? 'Income' : 'Outgoings'
    }
  ]
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(actControlButtonClick(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CTACollection);
