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
				Random List
			</div>
			<div className="navigation__menu--element">
				Age Guesser
			</div>
		</div>
	</div>
);

export default Navigation;
