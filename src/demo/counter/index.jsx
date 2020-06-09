import React from 'react';
import {
	atom,
	useRecoilValue,
	useSetRecoilState,
	useRecoilState,
} from 'recoil';

// Atoms
const countState = atom({
	key: 'countState',
	default: 0,
});

const historyState = atom({
	key: 'historyState',
	default: [],
});

// Controller Component
function Controller() {
	const [count, setCount] = useRecoilState(countState);
	const setHistory = useSetRecoilState(historyState);

	const inc = () => {
		setCount(count + 1);
		setHistory((prev) => [...prev, 'Incremented By 1']);
	};

	const dec = () => {
		setCount(count - 1);
		setHistory((prev) => [...prev, 'Decremented By 1']);
	};
	return (
		<div>
			<button onClick={inc}>Increment</button>
			<button onClick={dec}>Decrement</button>
		</div>
	);
}

// History Component
function History() {
	const history = useRecoilValue(historyState);
	return (
		<ul>
			{history.map((item) => (
				<li>{item}</li>
			))}
		</ul>
	);
}

function Counter() {
	const count = useRecoilValue(countState);
	return (
		<div>
			<h3>Count: {count} </h3>
			<Controller />
			<br />
			<h3>History</h3>
			<History history={[]} />
		</div>
	);
}

export default Counter;
