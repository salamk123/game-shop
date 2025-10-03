import React, { useEffect, useState } from 'react';
import "./styles/App.css";
import Header from './components/common/header/Header';
import { Route, Routes } from 'react-router-dom';
import { routes } from './route/routes';
import Layout from './components/common/layout/Layout';
import Games from './API/GamesService';
import { IGame } from './types/types';
import Footer from './components/common/footer/Footer';

function App() {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    const response = await Games.getAll();
    setGames(response.slice(0, 7))
  }

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

      <Layout games={games}/>

      <Footer/>
    </div>
  );
}

export default App;
