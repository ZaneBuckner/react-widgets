import { useState, useEffect } from 'react';

import { StyledTodo } from './Todo.Styled';

import Card from 'components/shared/Card';
import CardHeader from 'components/shared/CardHeader';
import Modal from 'components/shared/Modal';

import { MdOutlineChecklistRtl as TodoIcon } from 'react-icons/md';

function Todo() {
	const [showModal, setShowModal] = useState(false);

	return (
		<Card>
			<CardHeader
				name='ToDo App'
				icon={<TodoIcon />}
				widgetRef='todo'
				setShowModal={setShowModal}
			/>
			<StyledTodo></StyledTodo>
		</Card>
	);
}

export default Todo;
