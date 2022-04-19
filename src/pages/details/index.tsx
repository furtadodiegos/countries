import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

import { AppAvatar, AppText } from '../../components';
import { AppCard, AppContainer } from '../../components/styles';
import { BackButton, Container, StyledLink, Title } from './styles';
import useDetails from './useDetails';

const AppDetailsPage: FC = () => {
  const { country } = useDetails();

  return country ? (
    <AppContainer flexDirection="column">
      <AppContainer alignItems="center">
        <BackButton size={26} />

        <Link to="/">Back</Link>
      </AppContainer>

      <Container alignItems="center">
        <AppAvatar url={country.flags.png} />

        <Title bold={900} fontSize={18}>
          {country.name.common}
        </Title>
      </Container>

      <AppCard>
        <MapContainer center={country.latlng} zoom={2}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={country.latlng}>
            <Popup>{country.name.official}</Popup>
          </Marker>
        </MapContainer>
      </AppCard>

      <Title bold={700} fontSize={18}>
        Details
      </Title>
      {[
        { label: 'Population:', value: country.population },
        { label: 'Native Name:', value: country.name.official },
        { label: 'Capital:', value: country.capital[0] },
        { label: 'Region:', value: country.region },
      ].map(({ label, value }) => (
        <AppContainer fullWidth justifyContent="space-between" alignItems="center" key={label}>
          <Title>{label}</Title>
          <Title bold={800}>{value}</Title>
        </AppContainer>
      ))}

      <Title bold={700} fontSize={18}>
        Bordes
      </Title>
      <Container alignItems="center">
        {country.borders.map((border) => (
          <StyledLink key={border} to={`/${border}`}>
            {border}
          </StyledLink>
        ))}
      </Container>
    </AppContainer>
  ) : (
    <AppText>Loading...</AppText>
  );
};

export default AppDetailsPage;
