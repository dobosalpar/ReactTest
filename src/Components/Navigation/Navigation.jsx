import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToDoContext } from '../../App';
import './Navigation.css';

const Navigation = () => {
	const { toDoList } = useContext(ToDoContext);
	return (
		<div className="navigation">
			<div className="navigation__title">
				React test App
			</div>
			<div className="navigation__info">
				{`You have ${toDoList.length} things to do`}
			</div>
			<div className="navigation__menu">
				<Link to="/" className="navigation__menu--element">
					Random List
				</Link>
				<Link to="/age-guesser" className="navigation__menu--element">
					Age Guesser
				</Link>
				<Link to="/context" className="navigation__menu--element">
					Context
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
