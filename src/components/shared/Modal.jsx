import styled from 'styled-components';

import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

const StyledModal = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100%;
	margin: auto;
	padding: 1rem;

	font-family: 'Roboto', serif;
	font-weight: 400;
	color: #c3c3c3;

	background-color: rgba(53 53 53, 0.5);
	border: #c3c3c3;
	border-radius: 10px;
	backdrop-filter: blur(6px);

	.close-modal-icon {
		position: absolute;
		top: 0;
		right: 0;
		margin: 1rem;

		font-size: 1.8rem;
		fill: #dab55d;
		cursor: pointer;
	}
`;

function Modal({ showModal, setShowModal, children }) {
	return (
		<>
			{showModal && (
				<StyledModal>
					<CloseIcon
						className='close-modal-icon'
						aria-label='Close modal'
						onClick={() => setShowModal(prev => !prev)}
					/>
					{children}
				</StyledModal>
			)}
		</>
	);
}

export default Modal;
