import React from 'react';
import './App.css';


export default function App() {
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
 function getKey(str){
 for (let i=0; i< str.length; i++){
 key +=str.charCodeAt(i);
}  
return key.toStping() ;
}
  return (
    <div>
    <ul>
    {someList.map(el=> 
     <li key={getKey(el)}>{el.item}</li>
    )}
</ul>
    </div>
  );
}
