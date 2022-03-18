import { useState, useEffect } from 'react';
import { getCountry } from '../helpers/getCountry';
import { translateContry } from '../translate/translate';

export const useFetchCountry = (country) => {
	const [data, setData] = useState({ data: null, loading: false, error404: false });

	useEffect(() => {
		if (country.length > 0) {
			// Activa el estado de carga de la busqueda
			setData({ ...data, loading: true });

			getCountry(translateContry(country)).then((res) => {
				if (res.status !== 200) {
					// Si hay un error en la busqueda, evita que se rompa la pagina y notifica el error
					setData({ ...data, error404: true });
					return;
				}

				setData({ data: res.data, error404: false, loading: false });
			});
		}
	}, [country]);

	return data;
};
