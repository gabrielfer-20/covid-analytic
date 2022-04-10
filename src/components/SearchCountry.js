import { useState } from 'react';
import Img from 'next/image';
import SearchIcon from '../icons/search.svg';

export const SearchCountry = ({ setCountry }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInput = (e) => {
		const value = e.target.value;
		setInputValue(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.length > 0) {
			setCountry(inputValue);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center relative md:w-2/6 w-full"
			id="form-search-country">
			<input
				type="text"
				className="font-poppins shadow-md focus:outline-none w-full bg-white p-4 rounded-md "
				onChange={handleInput}
				placeholder="Encuentra el pais que deseas"
			/>
			<button className="absolute right-4 leading-none bg-emerald-400 p-2 rounded-md">
				<Img src={SearchIcon} height={21} width={21} />
			</button>
		</form>
	);
};
