import { useFetchCountry } from '../hooks/useFetchCountry';
import Img from 'next/image';

export const CountryItem = ({ country }) => {
	const { data, loading, error404 } = useFetchCountry(country);

	return (
		<>
			{data !== null && loading === false && error404 === false && (
				<div className="bg-emerald-50 mt-10 shadow-md p-4 relative rounded-md md:w-2/6 w-full animate__animated animate__zoomIn">
					<div className="absolute w-1/6 h-1/6 object-fill right-4">
						<Img src={data.countryInfo.flag} className="shadow-md" layout="fill" />
					</div>
					<div className="font-poppins leading-8 flex flex-col">
						<div className="flex">
							<h3 className=" font-semibold text-emerald-700"> Pais: </h3>
							<p className="text-gray-700 ml-1"> {data.country}</p>
						</div>

						<div className="flex">
							<h3 className=" font-semibold text-emerald-700">Continente: </h3>
							<p className="text-gray-700 ml-1">{data.continent}</p>
						</div>

						<div className="flex">
							<h3 className=" font-semibold text-emerald-700">
								Ultimos casos reportados:{' '}
							</h3>
							<p className="text-gray-700 ml-1">{data.todayCases}</p>
						</div>

						<div className="flex">
							<h3 className=" font-semibold text-emerald-700">
								Ultimas muertes reportadas:{' '}
							</h3>
							<p className="text-gray-700 ml-1">{data.todayDeaths}</p>
						</div>
						<div className="flex">
							<h3 className=" font-semibold text-emerald-700">Numero de casos: </h3>
							<p className="text-gray-700 ml-1">{data.cases}</p>
						</div>
						<div className="flex">
							<h3 className=" font-semibold text-emerald-700">
								Numero de Muertes:{' '}
							</h3>
							<p className="text-gray-700 ml-1">{data.deaths}</p>
						</div>
					</div>
				</div>
			)}

			{loading === true && (
				<div className="animate-spin h-10 mt-7 w-10 border-4 border-gray-300 border-t-green-400 rounded-full"></div>
			)}

			{error404 === true && (
				<div className="text-red-700 bg-red-200 border border-red-600 mt-7 rounded-md p-3 ">
					<p className="font-semibold text-lg">
						{' '}
						El pais que buscas no es posible ubicarlo
					</p>
					<p>Revisa si esta bien escrito el nombre del pais que necesitas</p>
				</div>
			)}
		</>
	);
};
