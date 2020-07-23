import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	overflow-x: auto;
	padding: 4px 0;
`;

export const Heading = styled.div`
	font-size: 22px;
	font-weight: 900;
	margin-bottom: 16px;
	margin-left: 32px;
`;

export const SlideBg = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	background: url('./pizza.jpg') center center/cover;

	transition: 0.3s ease-out;

	&:after {
		position: absolute;
		content: '';

		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
	}
`;

export const Slide = styled.div`
	width: 260px;
	height: 160px;

	border-radius: 30px;

	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

	margin-right: 16px;

	position: relative;

	overflow: hidden;

	flex: 1 0 260px;
	display: flex;

	cursor: pointer;
	user-select: none;

	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

	&:hover ${SlideBg} {
		transform: scale(1.2);
	}
`;

export const SlideContent = styled.div`
	margin-top: auto;
	margin-bottom: 0;
	position: relative;
	padding: 20px;
`;

export const SlideTitle = styled.div`
	font-size: 29px;
	font-weight: 900;
	color: #f6828c; /* #a72608; */
	margin-bottom: 8px;
`;

export const SlideSubtitle = styled.div`
	font-size: 10px;
	font-weight: 900;
	color: #dad6ca;
`;
