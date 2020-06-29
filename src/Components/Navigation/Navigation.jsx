import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
	<div className="navigation">
		<div className="navigation__title">
			React test App
		</div>
		<div className="navigation__menu">
			<Link to="/" className="navigation__menu--element">
				Random List
			</Link>
			<Link to="/age-guesser" className="navigation__menu--element">
				Age Guesser
			</Link>
		</div>
	</div>
);

export default Navigation;
