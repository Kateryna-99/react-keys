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

export default function App() {
  
 function getKey(str){
 for (let i=0; i< str.length; i++){
 key +=str.charCodeAt(i);
}  
return key.toStping() ;
}
const someList=props.el;
const items= someList.map((el)=> {
  const key=getKey(someList)
  return <li key={key}>{el}</li>
});
  return  (<ul>{items}</ul>);
  )
}
