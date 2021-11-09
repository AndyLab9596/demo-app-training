import React, { useEffect } from 'react';
import cityApi from './api/cityApi';
import './App.css';
import Counter from './features/counter/Counter';

function App() {
  useEffect(() => {
    cityApi.getAllCities().then((res) => console.log(res));
    // Tra ve 1 axiosResponse
    // Vậy phải gắn lại kiểu dữ liệu
  }, []);

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
