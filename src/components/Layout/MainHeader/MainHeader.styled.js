import styled from 'styled-components';

export const StyledHeader = styled.header`
	height: 12rem;
	display: flex;
	position: fixed;
	z-index: 1000;
	width: 100vw;
	justify-content: space-between;
	align-items: center;
	padding: 3rem 0 0 4rem;

	a img {
		transition: all 0.2s ease-out;
		&:hover {
			transform: scale(0.95);
		}

		&[rotate='1'] {
			animation: menuRotate 800ms 1;
		}

		@keyframes menuRotate {
			0% {
				transform: scale(0.9);
			}

			37% {
				transform: scale(1.15) rotateZ(0deg);
			}

			100% {
				transform: scale(1.15) rotateZ(540deg);
			}
		}
	}

	div {
		height: 1px;
		min-width: 1px;
		flex-grow: 1;
		position: relative;
		z-index: 1;
		background-color: rgba(151, 151, 151, 0.5);
		margin-left: 3rem;
		margin-right: -3rem;
	}

	nav {
		height: 100%;
		padding: 0 20rem 0 15rem;
		background-color: rgba(151, 151, 151, 0.1);
		backdrop-filter: blur(8px);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	ul {
		display: flex;
		justify-content: space-around;
		gap: 4rem;
		list-style: none;

		li a {
			color: ${({ theme }) => theme.colors.white};
			text-decoration: none;
			font-size: 2rem;
			padding: 3rem 0;
			transition: 0.2s;
			letter-spacing: 2px;

			&:hover {
				border-bottom: 2px solid rgba(151, 151, 151, 0.5);
			}

			span {
				font-weight: 500;
			}
		}
	}

	button {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
	}

	.active {
		border-bottom: 3px solid ${({ theme }) => theme.colors.white};
	}

	@media only screen and (max-width: 1200px) {
		height: 10rem;
		padding: 1rem 0 0 4rem;
		nav {
			padding: 0 10rem 0 7.5rem;
		}
	}

	@media only screen and (max-width: 1000px) {
		height: 8rem;
		padding: 0rem 0 0 4rem;
		nav {
			padding: 0 5rem;
		}

		ul {
			display: flex;
			justify-content: space-around;
			gap: 4rem;
			list-style: none;

			li a {
				padding: 2.5rem 0;
				span {
					display: none;
				}
			}
		}
	}

	@media only screen and (max-width: 850px) {
		div {
			display: none;
		}
	}

	@media only screen and (max-width: 650px) {
		padding: 0 3rem;
		button {
			display: block;
			z-index: 1001;
		}

		nav {
			position: absolute;
			top: 0;
			right: 0;
			height: 100vh;
			width: 30rem;
			display: block;
			padding: 0 3rem;
			transform: ${({ isOpen }) =>
				isOpen ? 'translateX(0)' : 'translateX(30rem)'};
			transition: all 0.3s ease-out;
		}

		ul {
			flex-direction: column;
			justify-content: flex-start;
			gap: 3rem;
			margin-top: 9rem;

			li {
				opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
				animation: ${({ isOpen }) =>
					isOpen ? '0.3s fadeIn forwards' : 'none'};
			}

			li a {
				padding: 0;
				border-bottom: none !important;

				&:hover {
					border-bottom: none;
				}
				span {
					display: inline;
				}
			}
		}
		${animation()}

		@keyframes fadeIn {
			0% {
				transform: translateX(40px);
				opacity: 0;
			}
			100% {
				transform: translateX(0px);
				opacity: 1;
			}
		}
	}
`;

function animation() {
	let str = '';
	for (let i = 0; i < 4; i++) {
		str += `
    ul {
			li:nth-of-type(${i + 1}) {
				animation-delay: ${0.1 * (i + 2)}s;
			}
		}
    `;
	}

	return str;
}
