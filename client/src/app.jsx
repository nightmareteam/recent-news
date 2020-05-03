import React from 'react';
import View from './updates_view.jsx';
import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			updates: [],
			modalToggle: false,
			id: 1,
		}
	}

	componentDidMount() {

		console.log('mounted');

		$.get('http://localhost:3003/updates')
			.done((data) => {

				console.log('[app.jsx: 27] got updates data back!!');

				this.setState({
					updates: data
				})
			});
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
		if (this.state.updates.length === 0 ) {
			console.log('state updates is empty', this.state.updates); //do something useful with this

			return (

				<h1>See it here</h1>

			)
		} else { //state updates is not empty and thus can be acted on

			return (
				
				<div>
					<View updates={this.state.updates} state={this.state} toggleModal={this.toggleModal.bind(this)} persistModal={this.persistModal.bind(this)} />
				</div>				
			)
		}
	}
}

export default App;
