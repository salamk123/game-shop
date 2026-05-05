import React, { useEffect, useState } from 'react';
import "./styles/App.css";
import Header from './components/common/header/Header';
import { Route, Routes } from 'react-router-dom';
import { routes } from './route/routes';
import Layout from './components/common/layout/Layout';
import Games from './API/GamesService';
import { IGame } from './types/types';
import Footer from './components/common/footer/Footer';
import { useFetching } from './hooks/useFetching';

function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        <Routes>
            {routes.map(route =>
              <Route path={route.path} element={route.element}/>
            )}
        </Routes>
      </main>

      <Layout/>

      <Footer/>
    </div>
  );
}

export default App;
