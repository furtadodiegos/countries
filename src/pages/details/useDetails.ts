import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useCountries, useMounted } from '../../hooks';
import type { Country } from '../../types';

const useDetails = () => {
  const { ready } = useMounted();

  const { getOneBy, countries } = useCountries();
  const { id } = useParams<{ id: string }>();

  const [country, setCountry] = useState<Country>();

  const handleCountry = useCallback(
    async (name: string) => {
      const find = countries.find(
        ({ name: { common }, cca3 }) => [cca3, common.toUpperCase()].indexOf(name.toUpperCase()) > -1,
      );

      if (find) setCountry(find);
      else await getOneBy(name);
    },
    [countries, getOneBy],
  );

  useEffect(() => {
    if (ready && id) handleCountry(id);
  }, [ready, countries, id, handleCountry]);

  return { country };
};

export default useDetails;
