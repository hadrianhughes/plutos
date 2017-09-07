import React from 'react';
import { connect } from 'react-redux';

import Dash from '../components/Dash.jsx';

const mapStateToProps = state => {
	return {
		portions: state.Dash.financePortions
	};
};

export default connect(mapStateToProps)(Dash);
