import React from 'react';
import './App.css';

export default function App() {
  let someList = [{id: 100, text: 'Animals'},
    {id: 101, text: 'Anime'},
    {id: 102, text: 'Anti-Malware'},
    {id: 103, text: 'Art Design'},
    {id: 104, text: 'Books'},
    {id: 105, text: 'Business'},
    {id: 106, text: 'Calendar'},
    {id: 107, text: 'Cloud Storage'},
    {id: 108, text: 'File Sharing'},
    {id: 109, text: 'Animals'},
    {id: 110, text: 'Continuous Integration'},
    {id: 111, text: 'Cryptocurrency'}];
  return (
    <div> 
      Some List:
      <ul>
       {someList.map(elm => (<li key={elm.id}>{elm.text}</li>))}
      </ul>
    </div>
  );
}
