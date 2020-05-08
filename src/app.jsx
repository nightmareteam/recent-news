import React from 'react';
import View from './updates_view';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalToggle: false,
			id: 1,
		}
	}

	toggleModal() {

		this.setState({
			modalToggle: !this.state.modalToggle
		})
	}

	persistModal(e) {

		e.stopPropogation();
	}

	render() {

		//first check if state updates is an empty array
		if (this.props.updates.length === 0 ) {
			return (

				<h1>See it here</h1>

			)
		} else { //state updates is not empty and thus can be acted on

			return (
				
				<div>
					<View updates={this.props.updates} modal={this.state.modalToggle} toggleModal={this.toggleModal.bind(this)} persistModal={this.persistModal.bind(this)} />
				</div>				
			)
		}
	}
}

export default App;
