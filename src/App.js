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

export default function App(array) {
              
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

ReactDOM.render(<ul>{items}</ul>, document.getElementById('root'));
