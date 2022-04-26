import styled from 'styled-components';

export const StyledTechnology = styled.main`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr auto;
	flex-grow: 1;
	background: url('./assets/technology/background-technology-desktop.jpg');
	background-size: cover;
	background-position: center;

	& > section {
		align-self: center;
		justify-self: center;
		width: 61rem;

		h5 {
			font-size: 2.8rem;
			font-weight: 400;
			letter-spacing: 4.75px;
			color: ${({ theme }) => theme.colors.paleBlue};

			span {
				color: ${({ theme }) => theme.colors.hoverGray};
			}
		}

		& > div {
			display: flex;
			margin-top: 4rem;
		}

		nav {
			margin-right: 5rem;
		}

		ul {
			list-style: none;
		}

		li {
			margin-bottom: 3.2rem;
		}

		button {
			aspect-ratio: 1;
			display: block;
			width: 6rem;
			border-radius: 50%;
			border: 1px solid ${({ theme }) => theme.colors.hoverGray};
			font-size: 2.5rem;
			font-family: 'Bellefair';
			cursor: pointer;
			background: none;
			color: #fff;
			transition: all 0.3s;

			&:hover {
				border: 1px solid #fff;
			}
		}

		h4 {
			font-size: 1.6rem;
			font-weight: 400;
			letter-spacing: 2.7px;
			color: ${({ theme }) => theme.colors.paleBlue};
		}

		h3 {
			font-family: 'Bellefair';
			font-size: 5.6rem;
			font-weight: 400;
			text-transform: uppercase;
		}

		p {
			margin-top: 2rem;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.colors.paleBlue};
			line-height: 3rem;
			letter-spacing: 1px;
		}
	}

	& > img {
		align-self: center;
		justify-self: flex-end;

		&[fadein='1'] {
			animation: 0.3s fadeIn forwards;
		}

		&[fadeout='1'] {
			animation: 0.3s fadeOut forwards;
		}

		@keyframes fadeIn {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@keyframes fadeOut {
			0% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}
	}

	@media only screen and (max-width: 1200px) {
		& > section {
			width: 50rem;

			h3 {
				font-size: 4rem;
			}
		}

		& > img {
			width: 90%;
		}
	}

	@media only screen and (max-width: 1050px) {
		& > section {
			width: 40rem;

			& > div {
				flex-direction: column;
			}

			nav {
				margin-right: 0rem;
				margin-bottom: 2rem;
			}

			ul {
				list-style: none;
				display: flex;
			}

			li {
				margin-bottom: 0;
				margin-right: 3.2rem;
			}
		}

		& > img {
			width: 80%;
		}
	}

	@media only screen and (max-width: 1050px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;

		& > section {
			width: 70%;
		}

		& > img {
			width: 70%;
			height: 25rem;
			min-width: 0;
			margin: 0 auto;
			object-fit: cover;
		}
	}

	@media only screen and (max-width: 500px) {
		& > section {
			width: 80%;
			align-self: flex-end;
			margin-bottom: 2rem;

			& > div {
				margin-top: 2rem;
			}

			h5 {
				letter-spacing: 1px;
			}

			button {
				aspect-ratio: 1;
				display: block;
				width: 3rem;
				font-size: 1.6rem;
			}
		}

		& > img {
			width: 80%;
			height: 15rem;
		}
	}
`;
