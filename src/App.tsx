import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import cityApi from './api/cityApi';
import './App.css';
import LoginPage from './features/auth/pages/LoginPage';
import AdminLayout from './components/layout/Admin';
import { NotFound } from './components/common';

function App() {
  useEffect(() => {
    cityApi.getAllCities().then((res) => console.log(res));
    // Tra ve 1 axiosResponse
    // Vậy phải gắn lại kiểu dữ liệu
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/admin">
          <AdminLayout />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
