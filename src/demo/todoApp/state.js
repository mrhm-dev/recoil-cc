import { atom, selector, useRecoilState } from 'recoil';

// Atoms
export const todoListState = atom({
	key: 'todoListState',
	default: [],
});

export const todoListFilterState = atom({
	key: 'todoListFilterState',
	default: 'Show All',
});

// Selectors
export const filteredTodoListState = selector({
	key: 'filteredTodoListState',
	get: ({ get }) => {
		const filter = get(todoListFilterState);
		const list = get(todoListState);

		switch (filter) {
			case 'Show Completed':
				return list.filter((item) => item.isComplete);
			case 'Show Uncompleted':
				return list.filter((item) => !item.isComplete);
			default:
				return list;
		}
	},
});

export const todoListStatsState = selector({
	key: 'todoListStatsState',
	get: ({ get }) => {
		const todoList = get(filteredTodoListState);
		const totalNum = todoList.length;
		const totalCompletedNum = todoList.filter((item) => item.isComplete)
			.length;
		const totalUncompletedNum = totalNum - totalCompletedNum;
		const percentCompleted =
			totalNum === 0 ? 0 : totalCompletedNum / totalNum;

		return {
			totalNum,
			totalCompletedNum,
			totalUncompletedNum,
			percentCompleted,
		};
	},
});

// Utility Functions
const cloneArray = (items, id) => ({
	cloned: items.map((item) => ({ ...item })),
	index: items.findIndex((item) => item.id === id),
});

let id = 0;
const generateId = () => id++;

// Custom Hooks
export const useTodoList = () => {
	const [todoList, setTodoList] = useRecoilState(todoListState);
	return {
		addItem: (value) =>
			setTodoList((prev) => [
				...prev,
				{
					id: generateId(),
					text: value,
					isComplete: false,
				},
			]),
		toggleComplete: (id) => {
			const { cloned, index } = cloneArray(todoList, id);
			cloned[index].isComplete = !cloned[index].isComplete;
			setTodoList(cloned);
		},
		editItem: (id, value) => {
			const { cloned, index } = cloneArray(todoList, id);
			cloned[index].text = value;
			setTodoList(cloned);
		},
		deleteItem: (id) => {
			const { cloned, index } = cloneArray(todoList, id);
			cloned.splice(index, 1);
			setTodoList(cloned);
		},
	};
};

export const useTodoListFilter = () => {
	const [filter, setFilter] = useRecoilState(todoListFilterState);
	return {
		filterState: filter,
		updateFilter: (value) => setFilter(value),
	};
};
