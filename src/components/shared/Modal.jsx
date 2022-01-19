import { StyledModal } from 'globalStyles';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

// MODAL USED TO GIVE ADDITIONAL INFORMATION ABOUT THE WIDGET
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
