import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, charCountState } from './state';

// Text Input Component
function TextInput() {
	const [text, setText] = useRecoilState(textState);
	const onChange = (e) => {
		setText(e.target.value);
	};
	return (
		<div>
			<input type='text' value={text} onChange={onChange} />
			<br />
			Echo: {text}
		</div>
	);
}

// Character Count Component
function CharacterCount() {
	const count = useRecoilValue(charCountState);
	return <div>Character Count: {count}</div>;
}

export default function CharacterCounter() {
	return (
		<div>
			<TextInput />
			<CharacterCount />
		</div>
	);
}
