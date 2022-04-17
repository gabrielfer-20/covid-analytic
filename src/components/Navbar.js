import Img from 'next/image';
import GithubIcon from '../icons/github.svg';

export const Navbar = () => {
	return (
		<nav className="py-5">
			<div className="container flex justify-between w-9/12 mx-auto">
				<h1 className="text-3xl font-lato text-emerald-400">
					Covid-19 <span className="text-slate-800">Analytic</span>{' '}
				</h1>
				<a
					href="https://github.com/gabrielfer-dev/covid-analytic"
					target="_blank"
					rel="noopener noreferrer">
					<Img src={GithubIcon} height={40} width={40} />
				</a>
			</div>
		</nav>
	);
};
