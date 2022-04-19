import React, { createContext, useCallback, useMemo, useState } from 'react';
import type { AxiosResponse } from 'axios';
import type { FC } from 'react';

import { axios } from '../services';
import type { Country, RequestEffects } from '../types';

export interface CountriesProps {
  countries: Country[];
  effects: RequestEffects;
  getOneBy: (value: string) => Promise<void>;
  getAll: () => Promise<void>;
}

const CountriesContext = createContext({} as CountriesProps);

type Props = {
  children?: React.ReactNode;
};

const initialEffects: RequestEffects = {
  isLoading: false,
  isSuccess: false,
  error: undefined,
};

const CountriesProvider: FC<Props> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [effects, setEffects] = useState<RequestEffects>(initialEffects);

  const getAll = useCallback(async () => {
    try {
      setEffects({ ...initialEffects, isLoading: true });

      const { data } = await axios.get('/all');

      setCountries(data);

      setEffects({ ...initialEffects, isSuccess: true });
    } catch (e) {
      const { data: error } = e as AxiosResponse;

      setEffects({ ...initialEffects, error });
    }
  }, []);

  const getOneBy = useCallback(async (value: string) => {
    try {
      setEffects({ ...initialEffects, isLoading: true });

      const { data } = await axios.get(`/${value.length <= 3 ? 'alpha' : 'name'}/${value}`);

      setCountries((currentState) => [...currentState, ...data]);

      setEffects({ ...initialEffects, isSuccess: true });
    } catch (e) {
      const { data: error } = e as AxiosResponse;

      setEffects({ ...initialEffects, error });
    }
  }, []);

  const value = useMemo(
    () => ({
      countries,
      effects,
      getOneBy,
      getAll,
    }),
    [countries, effects, getOneBy, getAll],
  );

  return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
};

export { CountriesContext, CountriesProvider };
