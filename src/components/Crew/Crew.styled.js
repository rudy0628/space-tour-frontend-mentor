import styled from 'styled-components';

export const StyledCrew = styled.main`
	height: 100vh;
	min-height: 0;
	background: url('./assets/crew/background-crew-desktop.jpg');
	background-size: cover;
	background-position: center;
	overflow: hidden;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	flex-grow: 1;

	& > div {
		align-self: center;
		justify-self: center;
		width: 60rem;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h5 {
			font-size: 2.8rem;
			letter-spacing: 4.75px;
			font-weight: 400;
			color: ${({ theme }) => theme.colors.paleBlue};

			span {
				color: ${({ theme }) => theme.colors.hoverGray};
			}
		}

		h4 {
			font-size: 3.2rem;
			font-family: 'Bellefair', serif;
			font-weight: 400;
			color: ${({ theme }) => theme.colors.hoverGray};
			text-transform: uppercase;
		}

		h3 {
			font-size: 5.6rem;
			font-family: 'Bellefair', serif;
			font-weight: 400;
			text-transform: uppercase;
		}

		p {
			font-size: 1.8rem;
			line-height: 3rem;
			letter-spacing: 1px;
			color: ${({ theme }) => theme.colors.paleBlue};
			margin-top: 2rem;
		}

		ul {
			display: flex;
			list-style: none;
			gap: 1.5rem;
		}

		button {
			aspect-ratio: 1;
			width: 1.8rem;
			border-radius: 50%;
			border: none;
			cursor: pointer;
			display: block;
			background-color: rgba(151, 151, 151, 0.5);

			&:hover {
				background-color: ${({ theme }) => theme.colors.hoverGray};
			}
		}
	}

	& > img {
		align-self: flex-end;
		justify-self: center;
		height: 85%;

		&[fadeout='1'] {
			animation: 0.3s fadeout forwards;
		}

		&[fadein='1'] {
			animation: 0.3s fadein forwards;
		}

		@keyframes fadein {
			0% {
				opacity: 0;
				transform: translateY(50px);
			}

			100% {
				opacity: 1;
				transform: translate(0px);
			}
		}

		@keyframes fadeout {
			0% {
				opacity: 1;
				transform: translateY(0px);
			}

			100% {
				opacity: 0;
				transform: translateY(-50px);
			}
		}
	}

	@media only screen and (max-width: 1500px) {
		& > div {
			height: 32.5rem;
			width: 46rem;

			h3 {
				font-size: 4rem;
			}
		}

		& > img {
			height: 60%;
		}
	}

	@media only screen and (max-width: 1150px) {
		& > div {
			width: 40rem;

			h4 {
				font-size: 2.4rem;
			}

			h3 {
				margin-top: 1rem;
			}
		}
	}

	@media only screen and (max-width: 950px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		background: url('./assets/crew/background-crew-tablet.jpg');
		background-size: cover;
		background-position: center;

		& > div {
			margin: 10rem 0 5rem;
			text-align: center;
			width: 50rem;

			nav {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		& > img {
			align-self: flex-start;
		}
	}

	@media only screen and (max-width: 550px) {
		background: url('./assets/crew/background-crew-mobile.jpg');
		background-size: cover;
		background-position: center;

		& > div {
			width: 40rem;

			h3 {
				font-size: 3rem;
			}
		}
	}

	@media only screen and (max-width: 450px) {
		& > div {
			width: 30rem;

			h3 {
				font-size: 2.6rem;
			}

			h4 {
				font-size: 2rem;
			}

			p {
				line-height: 1.2;
			}
		}
	}
`;
