import React from 'react';
import "./styles/App.css";
import Header from './components/common/header/Header';
import { Route, Routes } from 'react-router-dom';
import { routes } from './route/routes';

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
    </div>
  );
}

export default App;
