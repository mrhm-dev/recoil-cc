import React from 'react';
import { useTodoListFilter } from './state';

function TodoListFilters() {
	const { filterState, updateFilter } = useTodoListFilter();
	return (
		<div>
			Filter:
			<select
				value={filterState}
				onChange={(e) => updateFilter(e.target.value)}
			>
				<option value='Show All'>All</option>
				<option value='Show Completed'>Completed</option>
				<option value='Show Uncompleted'>Uncompleted</option>
			</select>
		</div>
	);
}

export default TodoListFilters;
