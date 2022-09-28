import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Cr from './comp/cop/Cr';
import Countres from './comp/cop/Countres';

function App() {
  return (
    <div>
      <Cr> </Cr>
      <Countres></Countres>

      {/* <Loadcountrise></Loadcountrise> */}
    </div>
  
  );
}

// // 1111
// function Loadcountrise (){
//   // 22
//   const [countries,setcountries]=useState([])
//   // 3333
//   useEffect(() =>{
//     fetch("https://restcountries.com/v3.1/all")
//     .then(res => res.json())
//     .then(data => setcountries(data))

//   },[])


//   return(
//     <div>
//       <h1> visit countrise</h1>
//       <h1>Avilable Countres :{countries.length}</h1>
//       {
//         countries.map(country =>  <Country name1={country.name.common} population={country.population} > </Country> )
//       }
//     </div>
//   )
// }
// // -------------------
// function Country (props ){
//   return(
//     <div>
//       <h2>Name : {props.name1}</h2>
//       <h4>  {props.population}</h4>
//     </div>
//   )
// }


// ------------------

export default App;

// 
// echo "# my-app6" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/k12amrul/my-app6.git
// git push -u origin main


git add .
git commit -m "first commit"
git push -u origin main