import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import cityApi from './api/cityApi';
import './App.css';

function App() {
  useEffect(() => {
    cityApi.getAllCities().then((res) => console.log(res));
    // Tra ve 1 axiosResponse
    // Vậy phải gắn lại kiểu dữ liệu
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/login"></Route>

        <Route path="admin"></Route>

        <Route>{/* Not found */}</Route>
      </Switch>
    </div>
  );
}

export default App;
