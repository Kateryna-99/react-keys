import React from 'react';
import './App.css';
const someList= [
   "Animals",
   "Animals",
   "Anime",
    "Anti-Malware",
    "Art Design",
   "Books",
   "Business",
   "Calendar",
    "Cloud Storage",
    "Continuous Integration",
    "Cryptocurrency",
    "File Sharing",
   ];

export default function App(someList) {        
  return (
    <div>
    <ul>
    {someList.map((el, index)=> 
     <li key={el.index}>{el.item}</li>
    )}
</ul>
    </div>
  );
}
