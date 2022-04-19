import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import type { FC } from 'react';

import { AppLayout } from './components';
import { CountriesProvider } from './contexts';
import { AppDetailsPage, AppHomePage, AppNotFoundPage } from './pages';

const App: FC = () => {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<AppHomePage />} />
            <Route path=":id" element={<AppDetailsPage />} />

            <Route path="*" element={<AppNotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  );
};

export default App;
