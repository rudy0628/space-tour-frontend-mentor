import React, { useState } from 'react';
import { StyledHeader } from './MainHeader.styled';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const MainHeader = () => {
	const navigate = useNavigate();
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [menuRotate, setMenuRotate] = useState(0);

	const active = {
		borderBottom: '2px solid #fff',
	};

	const navLinkHandler = (args, e) => {
		e.preventDefault();

		setTimeout(() => {
			navigate(`/${args}`);
		}, 800);
	};

	return (
		<StyledHeader isOpen={menuIsOpen}>
			<Link to="/home" onClick={navLinkHandler.bind(this, 'home')}>
				<img
					src="./assets/shared/logo.svg"
					alt="logo"
					onClick={() => setMenuRotate(1)}
					onAnimationEnd={() => setMenuRotate(0)}
					rotate={menuRotate}
				/>
			</Link>
			<div></div>
			<nav>
				<ul>
					<li>
						<NavLink
							to="/home"
							style={({ isActive }) => (isActive ? active : undefined)}
						>
							<span>00</span> HOME
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/destination"
							style={({ isActive }) => (isActive ? active : undefined)}
						>
							<span>01</span> DESTINATION
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/crew"
							style={({ isActive }) => (isActive ? active : undefined)}
						>
							<span>02</span> CREW
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/technology"
							style={({ isActive }) => (isActive ? active : undefined)}
						>
							<span>03</span> TECHNOLOGY
						</NavLink>
					</li>
				</ul>
			</nav>
			<button onClick={() => setMenuIsOpen(prev => !prev)}>
				<img
					src={`./assets/shared/icon-${menuIsOpen ? 'close' : 'hamburger'}.svg`}
					alt="menu"
				/>
			</button>
		</StyledHeader>
	);
};

export default MainHeader;
