import React, { useEffect, useState } from 'react';
import County from '../country/County';
import './Countres.css'

const Countres = () => {
    const [countres,setCountres]=useState([])
    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then( res => res.json())
        .then(data => setCountres(data))
    }
        ,[])
    return (
        <div className='countres-container'>
            <h1>Countres </h1>
            <p>data {countres.length}</p>
            {
               // countres.map(country => console.log(country.name.common))
            }
            {
                countres.map(country =>   <County
                    country={country}
                ></County>
                
                )
            }
            {/* {
                countres.map(country => <County 
                    country={country}
                    // name={country.name.common}
                    // population={country.population}
                    ></County>)
            } */}
            {/* cost */}
            
        </div>
    );
};

export default Countres;