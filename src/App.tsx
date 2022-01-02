import React, { useEffect, useState } from 'react';
import './App.css';
import InputUrl from './components/InputUrl';
import axios, {AxiosResponse} from 'axios';

function App() {

  const [playlist, setplaylist] = useState<string>();

  const updateName = (name: string): void => {
    setplaylist(name);
  }

  return (
    <div className="page-section">
      <InputUrl updateName={updateName.bind("")}></InputUrl>
    </div>
  );
}
/*
  Hooks:
    -useState(): when data changes re-render the UI -> takes one default state (initial state)
      -returns an array: const [count, setCount] = useState(); -> count=reactive value and setCount=setter
      - button onClick={() => setCount(count + 1)}> use the setCount function setter to change the value
*/
export default App;
