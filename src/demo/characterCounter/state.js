import { atom, selector } from 'recoil';

export const textState = atom({
	key: 'textState',
	default: '',
});

export const charCountState = selector({
	key: 'charCountState',
	get: ({ get }) => {
		const text = get(textState);
		return text.length;
	},
});
