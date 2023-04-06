import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoadingProvider } from '@components/LoaderComponent';

import '@ui/Loader/img/Loader.png';

import { Layout } from './Layout';

import '@assets/styles/App.scss';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchServerData();
  }, []);
  return (
    <>
      <LoadingProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </LoadingProvider>
    </>
  );
};
