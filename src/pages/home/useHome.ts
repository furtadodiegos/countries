import { useCallback, useEffect, useState } from 'react';

import { useCountries, useMounted } from '../../hooks';
import type { Country } from '../../types';

const useHome = () => {
  const { ready } = useMounted();
  const { countries, effects, getAll } = useCountries();

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const [search, setSearch] = useState('');
  const [result, setResult] = useState<Country[]>([]);
  const [selected, setSelected] = useState<string>('');

  const onSelect = useCallback((newSelect: string) => {
    setSelected((currentSelected) => (currentSelected === newSelect ? '' : newSelect));
  }, []);

  useEffect(() => {
    setResult(
      countries
        .filter(({ region }) => (selected ? region === selected : region))
        .filter(({ name: { common } }) => common.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search, selected, countries]);

  useEffect(() => {
    if (ready) getAll();
  }, [getAll, ready]);

  return { search, setSearch, countries, effects, result, regions, selected, onSelect };
};

export default useHome;
