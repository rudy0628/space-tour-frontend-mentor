import styled from 'styled-components';

export const StyledDestination = styled.main`
	min-height: 100vh;
	background: url('./assets/destination/background-destination-desktop.jpg');
	background-position: center;
	background-size: cover;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	overflow: hidden;
	flex-grow: 1;

	section {
		&:nth-child(1) {
			align-self: center;
			justify-self: center;
			display: flex;
			flex-direction: column;
			align-items: center;

			h5 {
				font-size: 2.4rem;
				margin: 1rem 0 2.5rem;
				text-align: center;
				font-weight: 400;
				letter-spacing: 5px;
				color: ${({ theme }) => theme.colors.paleBlue};

				span {
					color: ${({ theme }) => theme.colors.hoverGray};
				}
			}

			img {
				width: 40rem;
				margin-top: 3rem;

				&[fadein='1'] {
					animation: 0.3s fadeIn forwards;
				}

				&[fadeout='1'] {
					animation: 0.3s fadeout forwards;
				}

				@keyframes fadeout {
					0% {
						opacity: 1;
						transform: translateX(0px) rotateY(0deg) scale(1);
					}

					100% {
						opacity: 0;
						transform: translateX(-200px) rotateY(60deg) scale(0.6);
					}
				}

				@keyframes fadeIn {
					0% {
						opacity: 0;
						transform: translateX(200px) rotateY(60deg) scale(0.6);
					}

					100% {
						opacity: 1;
						transform: translateX(0px) rotateY(0deg) scale(1);
					}
				}
			}
		}

		&:nth-child(2) {
			align-self: center;
			justify-self: center;
			width: 50rem;

			ul {
				display: flex;
				list-style: none;
				width: 30rem;
				justify-content: space-between;
			}

			button {
				font-family: 'Barlow Condensed', sans-serif;
				display: block;
				padding: 1rem 0;
				background: none;
				border: none;
				color: ${({ theme }) => theme.colors.white};
				font-size: 1.6rem;
				letter-spacing: 2.7px;
				cursor: pointer;
				transition: all 0.25s;

				&:hover {
					border-bottom: 2px solid rgba(151, 151, 151, 0.5);
				}
			}

			h1 {
				font-size: 15rem;
				font-family: 'Bellefair', serif;
				font-weight: 400;
				text-transform: uppercase;
				letter-spacing: -1px;
			}

			p {
				line-height: 2.7rem;
				font-size: 2rem;
				letter-spacing: 1.5px;
				min-height: 12rem;
				color: ${({ theme }) => theme.colors.paleBlue};
			}

			& > div {
				display: flex;
				margin-top: 5rem;
				padding-top: 3.5rem;
				border-top: 1px solid rgba(151, 151, 151, 0.5);

				div {
					flex-grow: 1;
				}
			}

			h6 {
				font-size: 1.4rem;
				font-weight: 400;
				letter-spacing: 2.35px;
				color: ${({ theme }) => theme.colors.paleBlue};
				margin-bottom: 1rem;
			}

			h4 {
				font-family: 'Bellefair', serif;
				font-size: 3.2rem;
				font-weight: 400;
				text-transform: uppercase;
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		section {
			&:nth-child(1) {
				img {
					width: 37rem;
				}
			}
			&:nth-child(2) {
				h1 {
					font-size: 12.5rem;
				}

				p {
					font-size: 1.6rem;
					letter-spacing: 1.2px;
				}
			}
		}
	}

	@media only screen and (max-width: 1100px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
		section {
			&:nth-child(1) {
				margin-top: 15rem;
			}

			&:nth-child(2) {
				width: 100%;
				height: auto;
				padding: 0 7.5rem 3rem;
				text-align: center;

				ul {
					margin: 0 auto;
				}

				p {
					min-height: 10rem;
				}
			}
		}
	}

	@media only screen and (max-width: 650px) {
		section {
			&:nth-child(2) {
				h1 {
					font-size: 10rem;
				}

				ul {
					margin: 0 auto 2rem;
				}

				& > div {
					flex-direction: column;
					gap: 2.4rem;
				}
			}
		}
	}

	@media only screen and (max-width: 500px) {
		background: url('./assets/destination/background-destination-mobile.jpg');
		background-position: center;
		background-size: cover;

		section {
			&:nth-child(1) {
				margin-top: 0rem;
				img {
					width: 30rem;
				}
			}

			&:nth-child(2) {
				padding: 1rem 5rem 3.5rem;
			}
		}
	}

	@media only screen and (max-width: 450px) {
		section {
			&:nth-child(1) {
				img {
					width: 20rem;
				}
			}

			&:nth-child(2) {
				padding: 1rem 3.5rem 3.5rem;

				h1 {
					font-size: 5rem;
				}

				ul {
					width: 25rem;
				}
			}
		}
	}
`;
