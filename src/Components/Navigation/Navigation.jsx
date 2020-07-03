import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext, CalculatorContext } from '../../App';
import './Navigation.css';

const Navigation = () => {
	const { todoList } = useContext(TodoContext);
	const { state } = useContext(CalculatorContext);

	return (
		<div className="navigation">
			<div className="navigation__title">
				React test App
			</div>
			<div className="navigation__info">
				{`You have ${todoList.length} things to do`}
			</div>
			<div className="navigation__info">
				{`Your calculation result is ${state.value}`}
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
				<Link to="/calculator" className="navigation__menu--element">
					Calculator
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
