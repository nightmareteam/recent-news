import React from 'react';
import View from './updates_view.jsx';
import Checkout from './checkout_comp.jsx';
import About from './about.jsx';
import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			updates: [],
			modalToggle: false,
			id: 1,
			game: {},
			platforms: [],
			vr_supprt: []
		}
	}

	componentDidMount() {
		const params = new URLSearchParams(window.location.search);
		const gameId = params.get('gameId');

		if (gameId) {
			$.get(`recent-news/${gameId}/updates`)
				.done((data) => {
	
					this.setState({
						updates: data
					});
				});
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
		if (this.state.updates.length === 0 ) {
			console.log('state updates is empty', this.state.updates); //do something useful with this

			return (

				<h1>See it here</h1>

			)
		} else { //state updates is not empty and thus can be acted on

			return (
				
				<div>
					<Checkout platforms={this.state.platforms} title={this.state.game} vr={this.state.vr_supprt}/>
					<View updates={this.state.updates} state={this.state} toggleModal={this.toggleModal.bind(this)} persistModal={this.persistModal.bind(this)} />
					<About />
				</div>				
			)
		}
	}
}

export default App;
