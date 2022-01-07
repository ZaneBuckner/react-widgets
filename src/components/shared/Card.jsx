import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
	position: relative;
	padding: 1rem;
	background-color: #353535;
	border-radius: 10px;
	box-shadow: 2px 6px 13px -4px rgba(0, 0, 0, 0.57);
`;

function Card({ children }) {
	return <StyledCard>{children}</StyledCard>;
}

Card.defaultProps = {
	reverse: false,
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};

export default Card;
