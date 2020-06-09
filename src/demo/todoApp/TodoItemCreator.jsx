import React, { useState } from 'react';
import { useTodoList } from './state';

function TodoItemCreator() {
	const [inputValue, setInputValue] = useState('');
	const { addItem } = useTodoList();

	const onChange = ({ target: { value } }) => {
		setInputValue(value);
	};

	return (
		<div>
			<input type='text' value={inputValue} onChange={onChange} />
			<button
				onClick={() => {
					addItem(inputValue);
					setInputValue('');
				}}
			>
				Add
			</button>
		</div>
	);
}

export default TodoItemCreator;
