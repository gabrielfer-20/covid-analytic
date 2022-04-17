import Head from 'next/head';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Covid-19 Analytic</title>
				<link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
			</Head>

			<div className="flex flex-col justify-between min-h-screen">
				<div>
					<Navbar />
					<section className="container w-9/12 mx-auto mt-10">
						<h2 className="text-3xl text-center text-slate-800 font-lato">
							Mira el estado de los paises infectados
						</h2>

						<main className="flex flex-col items-center mt-5">{children}</main>
					</section>
				</div>

				<footer className="pb-8 text-base text-center text-slate-700">
					By Gabriel Fernández
				</footer>
			</div>
		</>
	);
};
