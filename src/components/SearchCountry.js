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
			className="relative flex items-center w-full md:w-2/6"
			id="form-search-country">
			<input
				type="text"
				className="w-full p-4 bg-white rounded-md shadow-md font-poppins focus:outline-none "
				onChange={handleInput}
				placeholder="Encuentra el pais que deseas"
			/>
			<button className="absolute p-2 leading-none rounded-md right-4 bg-emerald-400">
				<Img src={SearchIcon} height={21} width={21} />
			</button>
		</form>
	);
};
