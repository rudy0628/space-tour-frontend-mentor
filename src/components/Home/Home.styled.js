import styled from 'styled-components';

export const StyledHome = styled.main`
	position: relative;
	height: 100vh;
	background-image: url('./assets/home/background-home-desktop.jpg');
	background-size: cover;
	background-position: center;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	flex-grow: 1;
	min-height: 0;
	z-index: 2;

	section {
		align-self: flex-end;
		justify-self: center;
		margin: 12.5rem 0;
		width: 45rem;

		h5 {
			font-size: 2.8rem;
			letter-spacing: 4.75px;
			color: ${({ theme }) => theme.colors.paleBlue};
			font-weight: 400;
		}

		h1 {
			font-size: 15rem;
			font-family: 'Bellefair', serif;
			font-weight: 400;
		}

		p {
			font-size: 1.8rem;
			line-height: 3rem;
			letter-spacing: 1px;
			color: ${({ theme }) => theme.colors.paleBlue};
		}
	}

	button {
		align-self: flex-end;
		justify-self: center;
		aspect-ratio: 1;
		width: 27.5rem;
		border-radius: 50%;
		border: none;
		position: relative;
		cursor: pointer;
		margin: 12.5rem 0;
		transition: 0.25s ease-out;
		background-color: ${({ theme }) => theme.colors.white};

		&[rotate='1'] {
			animation: 0.75s exploreBtnRotate linear forwards;
		}

		@keyframes exploreBtnRotate {
			0% {
				transform: rotateY(0deg) translateY(0px);
				opacity: 1;
			}

			100% {
				transform: rotateY(720deg) translateY(-50px);
				opacity: 0;
			}
		}

		a:link,
		a:visited {
			font-size: 3.2rem;
			font-family: 'Bellefair', serif;
			text-decoration: none;
			color: ${({ theme }) => theme.colors.black};
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	button:after {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(151, 151, 151, 0.35);
		aspect-ratio: 1;
		width: 100%;
		border-radius: 50%;
		z-index: -1;
		transition: 0.25s ease-out;
	}

	button:hover:after {
		transform: translate(-50%, -50%) scale(1.3);
	}

	@media only screen and (max-width: 1400px) {
		section {
			margin: 0 0 6rem 0;
		}

		button {
			margin: 0 0 6rem 0;
			width: 22.5rem;
		}
	}

	@media only screen and (max-width: 1200px) {
		section {
			justify-self: flex-end;
		}
	}

	@media only screen and (max-width: 1000px) {
		background-image: url('./assets/home/background-home-tablet.jpg');
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;

		section {
			justify-self: center;
			margin: 0;
			margin-top: 15rem;

			* {
				text-align: center;
			}

			button {
				margin: 0;
				align-self: center;
			}
		}
	}

	@media only screen and (max-width: 850px) {
		section {
			width: 50rem;

			h5 {
				font-size: 2.2rem;
			}

			h1 {
				font-size: 12.5rem;
			}

			p {
				line-height: 2.5rem;
				font-size: 1.6rem;
			}
		}
	}

	@media only screen and (max-width: 550px) {
		background-image: url('./assets/home/background-home-mobile.jpg');

		section {
			width: 38rem;
			align-self: center;

			h5 {
				margin-bottom: 2rem;
			}

			h1 {
				margin-bottom: 2rem;
			}
		}

		button {
			width: 20rem;
		}
	}

	@media only screen and (max-width: 450px) {
		section {
			width: 35rem;

			h1 {
				font-size: 10rem;
			}
		}
	}

	@media only screen and (max-width: 450px) {
		section {
			width: 30rem;

			h1 {
				font-size: 8rem;
			}
		}
	}
`;
