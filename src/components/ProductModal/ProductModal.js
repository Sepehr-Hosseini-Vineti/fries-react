import React from 'react';

import { useSpring, animated } from 'react-spring';

import { Typography, LinearProgress } from '@material-ui/core';

import { Modal, ModalBody, Cover, Content } from './styled';

function ProductModal({ product, onCloseModal, isModalOpen }) {
	const props = useSpring({ opacity: isModalOpen ? 1 : 0 });

	return (
		<Modal open={isModalOpen} onClose={onCloseModal}>
			<animated.div style={props}>
				<ModalBody style={{ width: 400, height: 600 }}>
					{!!product ? (
						<>
							<Cover>
								<img src="./pizza.jpg" alt={product.name} />
							</Cover>
							<Content>
								<Typography gutterBottom variant="h5" component="h2">
									{product.name}
								</Typography>
								<div>{product.description}</div>
							</Content>
						</>
					) : (
						<LinearProgress />
					)}
				</ModalBody>
			</animated.div>
		</Modal>
	);
}

export default ProductModal;
