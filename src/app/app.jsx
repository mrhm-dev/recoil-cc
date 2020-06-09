import './app.css';
import React from 'react';
import { RecoilRoot } from 'recoil';

import Counter from '../demo/counter';
import CharacterCount from '../demo/characterCounter/CharacterCount';
import TodoList from '../demo/todoApp/TodoList';

function App() {
	return (
		<div className='app'>
			<RecoilRoot>
				<br />
				<h3>Recoil Demo by Stack Learner</h3>
				<hr />
				<br />
				{/* <Counter /> */}
				{/* <CharacterCount /> */}
				<TodoList />
			</RecoilRoot>
		</div>
	);
}

export default App;
