import React, { useState } from 'react';
import { StyledTechnology } from './Technology.styled';
import { technology } from '../../content';

const Technology = () => {
	const [currentTech, setCurrentTech] = useState('launchVehicle');
	const [fadeIn, setFadeIn] = useState(0);
	const [fadeOut, setFadeOut] = useState(1);

	const activeClasses = {
		border: '1px solid #fff',
		background: '#fff',
		color: '#333',
	};

	const navLinkHandler = tech => {
		setCurrentTech(tech);
		setFadeOut(1);
	};

	const animatedEndHandler = () => {
		setFadeOut(0);
		setTimeout(() => {
			setFadeIn(0);
		}, 300);
	};

	return (
		<StyledTechnology>
			<section>
				<h5>
					<span>03 </span>
					SPACE LAUNCH 101
				</h5>
				<div>
					<nav>
						<ul>
							<li>
								<button
									style={
										currentTech === 'launchVehicle' ? activeClasses : undefined
									}
									onClick={() => navLinkHandler('launchVehicle')}
								>
									1
								</button>
							</li>
							<li>
								<button
									style={
										currentTech === 'spaceport' ? activeClasses : undefined
									}
									onClick={() => navLinkHandler('spaceport')}
								>
									2
								</button>
							</li>
							<li>
								<button
									style={
										currentTech === 'spaceCapsule' ? activeClasses : undefined
									}
									onClick={() => navLinkHandler('spaceCapsule')}
								>
									3
								</button>
							</li>
						</ul>
					</nav>
					<div>
						<h4>THE TERMINOLOGY ...</h4>
						<h3>{technology[currentTech].name}</h3>
						<p>{technology[currentTech].description}</p>
					</div>
				</div>
			</section>
			<img
				src={technology[currentTech].images.portrait}
				alt={technology[currentTech].name}
				onAnimationEnd={animatedEndHandler}
				onLoad={() => setFadeIn(1)}
				fadein={fadeIn}
				fadeout={fadeOut}
			/>
		</StyledTechnology>
	);
};

export default Technology;
