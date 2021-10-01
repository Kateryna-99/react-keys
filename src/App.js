import React from 'react';
import './App.css';

export default function App() {
  let someList=[
   {id: 1, item: 'Animals'},
{ id: 2, item: 'Anime'},
{ id: 3, item: 'Anti-Malware'},
{ id: 4, item: 'Art Design'},
{ id: 5, item: 'Books'},
{ id: 6, item: 'Business'},
{ id: 7, item: 'Calendar'},
{ id: 8, item: 'Cloud Storage'},
{ id: 9, item: 'File Sharing'},
{ id: 10, item: 'Animals'},
{ id: 11, item: 'Continuous Integration'},
{ id: 12, item: 'Cryptocurrency'},
    ];            
  return (
    <div>
    <ul>
    {someList.map(el=> (
     <li key={el.id}>{el.item}</li>
    )
    )
  }
</ul>
    </div>
  );
}