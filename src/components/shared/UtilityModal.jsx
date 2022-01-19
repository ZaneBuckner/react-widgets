import { StyledModal } from 'globalStyles';
import { AiOutlineClose as CloseIcon } from 'react-icons/ai';

// MODAL USED TO GIVE ADDITIONAL FEATURES FOR A WIDGET
function UtilityModal({ showUtilityModal, setShowUtilityModal, children }) {
	return (
		<>
			{showUtilityModal && (
				<StyledModal>
					<CloseIcon
						className='close-modal-icon'
						aria-label='Close utility modal'
						onClick={() => setShowUtilityModal(prev => !prev)}
					/>
					{children}
				</StyledModal>
			)}
		</>
	);
}

export default UtilityModal;
