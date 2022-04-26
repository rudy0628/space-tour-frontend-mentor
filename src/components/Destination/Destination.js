import React, { useState } from 'react';
import { StyledDestination } from './Destination.styled';
import { destination } from '../../content';

const Destination = () => {
	const [currentDestination, setCurrentDestination] = useState('moon');
	const [imageFadeOutAnimation, setImageFadeOutAnimation] = useState(0);
	const [imageFadeInAnimation, setImageFadeInAnimation] = useState(0);

	const activeClasses = {
		borderBottom: '2px solid #fff',
	};

	const navLinkHandler = destination => {
		setCurrentDestination(destination);
		setImageFadeOutAnimation(1);
	};

	const setImageAnimation = () => {
		// set fade out to none(0.3s)
		setImageFadeOutAnimation(0);

		// after 0.3s, set fade in to none
		setTimeout(() => {
			setImageFadeInAnimation(0);
		}, 300);
	};

	return (
		<StyledDestination>
			<section>
				<h5>
					<span>01</span> PICK YOUR DESTINATION
				</h5>
				<img
					src={destination[currentDestination].images.png}
					alt={destination[currentDestination].name}
					onAnimationEnd={setImageAnimation}
					onLoad={() => setImageFadeInAnimation(1)}
					fadeout={imageFadeOutAnimation}
					fadein={imageFadeInAnimation}
				/>
			</section>
			<section>
				<nav>
					<ul>
						<li>
							<button
								onClick={() => navLinkHandler('moon')}
								style={
									currentDestination === 'moon' ? activeClasses : undefined
								}
							>
								MOON
							</button>
						</li>
						<li>
							<button
								onClick={() => navLinkHandler('mars')}
								style={
									currentDestination === 'mars' ? activeClasses : undefined
								}
							>
								MARS
							</button>
						</li>
						<li>
							<button
								onClick={() => navLinkHandler('europa')}
								style={
									currentDestination === 'europa' ? activeClasses : undefined
								}
							>
								EUROPA
							</button>
						</li>
						<li>
							<button
								onClick={() => navLinkHandler('titan')}
								style={
									currentDestination === 'titan' ? activeClasses : undefined
								}
							>
								TITAN
							</button>
						</li>
					</ul>
				</nav>
				<h1>{destination[currentDestination].name}</h1>
				<p>{destination[currentDestination].description}</p>
				<div>
					<div>
						<h6>AVG. DISTANCE</h6>
						<h4>{destination[currentDestination].distance}</h4>
					</div>
					<div>
						<h6>EST. TRAVEL TIME</h6>
						<h4>{destination[currentDestination].travel}</h4>
					</div>
				</div>
			</section>
		</StyledDestination>
	);
};

export default Destination;
