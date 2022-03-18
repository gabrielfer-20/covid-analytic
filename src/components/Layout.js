import Head from 'next/head';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Covid-19 Analytic</title>
			</Head>

			<div className="flex flex-col min-h-screen justify-between">
				<div>
					<Navbar />
					<section className="container w-9/12 mx-auto mt-10">
						<h2 className="text-3xl text-slate-800 text-center font-lato">
							Mira el estado de los paises infectados
						</h2>

						<main className="flex flex-col items-center mt-5">{children}</main>
					</section>
				</div>

				<footer className="text-center text-base pb-8 text-slate-700">
					By Gabriel Fernández
				</footer>
			</div>
		</>
	);
};
