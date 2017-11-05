import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
	componentDidMount() {
		this.props.requestTestApiData();
	}
	renderLink() {
		return <Link to='/'>
				<button>Go Home</button>
			</Link>
	}
	renderPeople() {
		if(!this.props.data.results) return <h1>Loading...</h1>;
		return this.props.data.results.map((person, index) => {
			return this.renderPerson(person, index);
		});
	}
	renderPerson(person, index) {
		return <div key={index}>
			<h1> {person.gender} </h1>
			<h1> person.name.first} </h1>
			<h1> {person.name.last} </h1>
			<img src={person.picture.medium} />
		</div>;
	}
	render () {
		return <div>
			<h1>About</h1>
			{this.renderLink()}
			{this.renderPeople()}
		</div>	
	}
}

export default About;