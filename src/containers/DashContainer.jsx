import React from 'react';

import Dash from '../components/Dash.jsx';

export default class DashContainer extends React.Component {
	state = {
		navItems: [
			{
				'text': 'Item 1',
				'href': '#'
			},
			{
				'text': 'Item 2',
				'href': '#'
			}
		]
	};

	render () {
		return <Dash navItems={this.state.navItems} />;
	}
}
