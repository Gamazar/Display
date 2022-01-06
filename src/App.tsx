import React, { useEffect, useState } from 'react';
import './App.css';
import InputUrl from './components/InputUrl';
// import axios, {AxiosResponse} from 'axios';

function App() {

  //const [playlist, setplaylist] = useState<string>();

  const [inputVal, setValue] = useState('');

  const [playlist, setPlaylist] = useState([]);

  // const onInputChange = (data : string) => {
  //   setValue(data);
  //   console.log("here it is: " + data);
  // }

  return (
    <div className="page-section">
      {/* <h1>{word}</h1> */}
      <InputUrl
        data={inputVal}
        updateTest={(list:any) => setPlaylist(list)}></InputUrl>
      {/* {playlist.map(list => <div>{list.test}</div>)} */}
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
