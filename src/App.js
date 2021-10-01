import React from 'react';
import './App.css';
let array = [
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
   ]

export default function App(props) {
     const  
  return (
    <ul>
    {array.map(item=> (
     <li key={item.id}>{item.text}</li>
    )
    )
  }
</ul>
    
  );
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}