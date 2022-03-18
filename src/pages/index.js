import { useState } from 'react';
import { CountryItem } from '../components/CountryItem';
import { SearchCountry } from '../components/SearchCountry';

export default () => {
	const [country, setCountry] = useState({});

	return (
		<>
			<SearchCountry setCountry={setCountry} />
			<CountryItem country={country} />
		</>
	);
};
