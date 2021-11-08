import React from 'react';
import { Switch } from 'react-router';
import './App.css';
import Counter from './features/counter/Counter';
import AdminLayout from './Layout/AdminLayout';

function App() {
  return (
    <Switch>
      <AdminLayout path="/admin" exact>
        <Counter />
      </AdminLayout>
      <h3>Hello world</h3>
      {/* <Counter /> */}
    </Switch>
  );
}

export default App;
