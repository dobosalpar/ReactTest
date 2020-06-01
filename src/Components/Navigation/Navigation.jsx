import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../../App'
import './Navigation.css';

const Navigation = () => {
	const todoContext = useContext(TodoContext);
	const { todoList } = todoContext;
	const length = todoList.length

	return (
		<div className="navigation">
			<div className="navigation__title">
				React test App
			</div>
			<div className="navigation__info">
				You have {length} things to do
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
