import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

import { AppAvatar, AppContainer, AppInput, AppText } from '../../components';
import { Chip, Container, GoButton, Title } from './styles';
import useHome from './useHome';

const AppHomePage: FC = () => {
  const { search, setSearch, result, regions, selected, onSelect } = useHome();

  return (
    <>
      <Container>
        <AppInput
          placeholder="Serach"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={<FiSearch />}
        />
      </Container>

      <Container justifyContent="space-evenly" alignItems="center">
        {regions.map((key) => (
          <Chip selected={selected === key} key={key} onClick={() => onSelect(key)}>
            <AppText bold={200} fontSize={12}>
              {key}
            </AppText>
          </Chip>
        ))}
      </Container>

      {result.map(({ name: { common }, flags }) => (
        <Link to={`/${common}`} key={common}>
          <Container justifyContent="space-between" alignItems="center">
            <AppContainer alignItems="center">
              <AppAvatar url={flags.png} />

              <Title bold={800}>{common}</Title>
            </AppContainer>

            <GoButton size={26} />
          </Container>
        </Link>
      ))}
    </>
  );
};

export default AppHomePage;
