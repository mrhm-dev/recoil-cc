import React from 'react';
import { useTodoList } from './state';

function TodoItem({ item }) {
	const { editItem, deleteItem, toggleComplete } = useTodoList();
	return (
		<div>
			<input
				type='text'
				value={item.text}
				onChange={(e) => editItem(item.id, e.target.value)}
			/>
			<input
				type='checkbox'
				checked={item.isComplete}
				onChange={() => toggleComplete(item.id)}
			/>
			<button onClick={() => deleteItem(item.id)}>X</button>
		</div>
	);
}

export default TodoItem;
