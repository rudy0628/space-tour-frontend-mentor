import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StyledHome } from './Home.styled';

const Home = () => {
	const navigate = useNavigate();
	const [exploreBtnRotate, setExploreBtnRotate] = useState(0);

	const linkHandler = (args, e) => {
		e.preventDefault();

		setTimeout(() => {
			navigate(`/${args}`);
		}, 750);
	};

	return (
		<StyledHome>
			<section>
				<h5>SO, YOU WANT TO TRAVEL TO</h5>
				<h1>SPACE</h1>
				<p>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</section>
			<button
				onClick={() => setExploreBtnRotate(1)}
				onAnimationEnd={() => setExploreBtnRotate(0)}
				rotate={exploreBtnRotate}
			>
				<Link to="/destination" onClick={linkHandler.bind(this, 'destination')}>
					EXPLORE
				</Link>
			</button>
		</StyledHome>
	);
};

export default Home;
