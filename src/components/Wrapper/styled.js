import styled from 'styled-components';

const gutterTop = (size) => `margin-top: ${size}px`;

export const WrapperUI = styled.div`
	max-width: 1200px;
	margin: 0 auto;

	@media (min-width: 992px) {
		padding: 0 16px;
	}

	${(props) => props.gutterTop && gutterTop(props.gutterTop)}
`;
