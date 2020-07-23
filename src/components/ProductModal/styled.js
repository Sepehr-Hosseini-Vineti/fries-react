import styled from 'styled-components';

import { Modal as ModalUI } from '@material-ui/core';

export const Modal = styled(ModalUI)`
	display: flex;
	align-items: center;
	justify-content: center;

	& > * {
		outline: none !important;
	}
`;

export const ModalBody = styled.div`
	background-color: #fff;
	border-radius: 30px;
	overflow: hidden;
`;

export const Cover = styled.div`
	height: 200px;
	overflow: hidden;
`;

export const Content = styled.div`
	padding: 20px;
`;
