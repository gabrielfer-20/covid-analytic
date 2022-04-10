import { useFetchCountry } from '../hooks/useFetchCountry';
import Img from 'next/image';

export const CountryItem = ({ country }) => {
	const { data, loading, error404 } = useFetchCountry(country);
	const setCountryName =
		`${country}`.charAt().toUpperCase() + `${country}`.slice(1).toLowerCase();

	return (
		<>
			{data !== null && loading === false && error404 === false && (
				<div
					data-test-id="country-item"
					className="relative w-full p-4 mt-10 rounded-md shadow-md bg-emerald-50 md:w-2/6 animate__animated animate__zoomIn">
					<div className="absolute object-fill w-1/6 h-1/6 right-4">
						<Img src={data.countryInfo.flag} className="shadow-md" layout="fill" />
					</div>
					<div className="flex flex-col leading-8 font-poppins">
						<div className="flex">
							<h3 className="font-semibold  text-emerald-700"> Pais: </h3>
							<p className="ml-1 text-gray-700"> {setCountryName}</p>
						</div>

						<div className="flex">
							<h3 className="font-semibold  text-emerald-700">Continente: </h3>
							<p className="ml-1 text-gray-700">{data.continent}</p>
						</div>

						<div className="flex">
							<h3 className="font-semibold  text-emerald-700">
								Ultimos casos reportados:{' '}
							</h3>
							<p className="ml-1 text-gray-700">{data.todayCases}</p>
						</div>

						<div className="flex">
							<h3 className="font-semibold  text-emerald-700">
								Ultimas muertes reportadas:{' '}
							</h3>
							<p className="ml-1 text-gray-700">{data.todayDeaths}</p>
						</div>
						<div className="flex">
							<h3 className="font-semibold  text-emerald-700">Numero de casos: </h3>
							<p className="ml-1 text-gray-700">{data.cases}</p>
						</div>
						<div className="flex">
							<h3 className="font-semibold  text-emerald-700">
								Numero de Muertes:{' '}
							</h3>
							<p className="ml-1 text-gray-700">{data.deaths}</p>
						</div>
					</div>
				</div>
			)}

			{loading === true && (
				<div className="w-10 h-10 border-4 border-gray-300 rounded-full animate-spin mt-7 border-t-green-400"></div>
			)}

			{error404 === true && (
				<div
					data-test-id="error-message"
					className="p-3 text-red-700 bg-red-200 border border-red-600 rounded-md mt-7 ">
					<p className="text-lg font-semibold">
						{' '}
						El pais que buscas no es posible ubicarlo
					</p>
					<p>Revisa si esta bien escrito el nombre del pais que necesitas</p>
				</div>
			)}
		</>
	);
};
