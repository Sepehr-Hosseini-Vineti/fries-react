import styled from 'styled-components';

export const SlideBg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: url(${({ image }) => image}) center center/cover;

	transition: 0.15s ease-out;

	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			180deg,
			var(--overlay-color) 0%,
			transparent 50%
		);
	}
`;

export const Slide = styled.div`
	width: 110px;
	height: 120px;

	padding: 14px 12px;
	margin-right: 16px;

	border-radius: 20px;
	overflow: hidden;

	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
	cursor: pointer;

	position: relative;

	&:hover ${SlideBg} {
		transform: scale(1.15);
	}

	--overlay-color: var(--navy);
	--title-color: var(--medium-pink);
	--subtitle-color: var(--light-pink);

	${({ active }) =>
		active &&
		`
		--overlay-color: var(--pink);
		--title-color: #fff;
		--subtitle-color: #fff;
	`}
`;
