import { useState } from 'react';

import { StyledTodo, StyledInput } from './Todo.Styled';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';

import { MdOutlineChecklistRtl as TodoIcon } from 'react-icons/md';

function Todo() {
	const [showModal, setShowModal] = useState(false);

	return (
		<Card>
			<CardHeader
				name='Todo Tracker'
				icon={<TodoIcon />}
				widgetRef='todo'
				setShowModal={setShowModal}
			/>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<h1>Coming Soon...</h1>
			</Modal>
			<StyledTodo>
				<StyledInput type='text' autoComplete='false' />
			</StyledTodo>
		</Card>
	);
}

export default Todo;
