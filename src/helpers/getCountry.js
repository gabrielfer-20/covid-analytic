export const getCountry = async (country) => {
	const url = `https://disease.sh/v3/covid-19/countries/${encodeURI(
		country,
	)}?yesterday=today&strict=true&allowNull=false`;

	const resp = await fetch(url);
	const data = await resp.json();
	return { data, status: resp.status };
};
