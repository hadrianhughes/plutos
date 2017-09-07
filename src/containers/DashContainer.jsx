import React from 'react';
import { connect } from 'react-redux';

import Dash from '../components/Dash.jsx';

const mapStateToProps = state => {
	return {
		incomeItems: state.Dash.incomeItems
	};
};

export default connect(mapStateToProps)(Dash);
