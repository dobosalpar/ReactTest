import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
	<div className="navigation">
		<div className="navigation__title">
			React test App
		</div>
		<div className="navigation__menu">
			<div className="navigation__menu--element">
				<Link to="/">Random List</Link>
			</div>
			<div className="navigation__menu--element">
				<Link to="/age-guesser">Age Guesser</Link>
			</div>
		</div>
	</div>
);

export default Navigation;
