import React from 'react';
import React from 'react';
import './App.css';
let someList=[
  "Animals",
  "Anime",
  "Anti-Malware",
  "Art Design",
  "Books",
  "Business",
  "Calendar",
  "Cloud Storage",
  "File Sharing",
  "Animals",
  "Continuous Integration",
  "Cryptocurrency" ,
]     

export default function App(someList) {        
  return (
    <div>
    <ul>
    {someList.map(el=> 
     <li key={el.id}>{el.item}</li>
    )}
</ul>
    </div>
  );
}
