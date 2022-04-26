import React, { useState } from 'react';
import { StyledCrew } from './Crew.styled';
import { crew } from '../../content';

const Crew = () => {
	const [currentCrew, setCurrentCrew] = useState('DouglasHurley');
	const [imageFadeIn, setImageFadeIn] = useState(0);
	const [imageFadeOut, setImageFadeOut] = useState(0);

	const navBtnHandler = crewName => {
		setCurrentCrew(crewName);
		setImageFadeOut(1);
	};

	const animateEndHandler = () => {
		setImageFadeOut(0);
		setTimeout(() => {
			setImageFadeIn(0);
		}, 300);
	};

	const activeClasses = {
		backgroundColor: '#fff',
	};

	return (
		<StyledCrew>
			<div>
				<h5>
					<span>02 </span>
					MEET YOUR CREW
				</h5>
				<div>
					<h4>{crew[currentCrew].role}</h4>
					<h3>{crew[currentCrew].name}</h3>
					<p>{crew[currentCrew].bio}</p>
				</div>
				<nav>
					<ul>
						<li>
							<button
								style={
									currentCrew === 'DouglasHurley' ? activeClasses : undefined
								}
								onClick={() => navBtnHandler('DouglasHurley')}
							></button>
						</li>
						<li>
							<button
								style={
									currentCrew === 'MarkShuttleworth' ? activeClasses : undefined
								}
								onClick={() => navBtnHandler('MarkShuttleworth')}
							></button>
						</li>
						<li>
							<button
								style={
									currentCrew === 'VictorGlover' ? activeClasses : undefined
								}
								onClick={() => navBtnHandler('VictorGlover')}
							></button>
						</li>
						<li>
							<button
								style={
									currentCrew === 'AnoushehAnsari' ? activeClasses : undefined
								}
								onClick={() => navBtnHandler('AnoushehAnsari')}
							></button>
						</li>
					</ul>
				</nav>
			</div>
			<img
				src={crew[currentCrew].images.png}
				alt={crew[currentCrew].name}
				onAnimationEnd={animateEndHandler}
				onLoad={() => setImageFadeIn(1)}
				fadein={imageFadeIn}
				fadeout={imageFadeOut}
			/>
		</StyledCrew>
	);
};

export default Crew;
