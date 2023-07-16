import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Routes, Link } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Profile from './pages/profile/Profile';
import PrivateRoute from './components/PrivateRoute';


function App() {
 
  const [login, setLogin] = useState(true);
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="/signup" element={<Signup />} />


          <Route
            path="/"
            element={
          
              <PrivateRoute
                redirectPath="/login"
                isAllowed={authenticated}
              >
                <Main />
              </PrivateRoute>
            }
          />



          


        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;
