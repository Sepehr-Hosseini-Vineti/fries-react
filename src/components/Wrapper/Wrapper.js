import React from 'react';
import PropTypes from 'prop-types';

import { WrapperUI } from './styled';

function Wrapper({ children, ...props }) {
	return <WrapperUI {...props}>{children}</WrapperUI>;
}

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Wrapper;
