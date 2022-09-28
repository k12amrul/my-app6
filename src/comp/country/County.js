import React from 'react';
import './County.css'

const County = (props) => {
    const {area,region,population,name} =props.country
    return (
        <div className='country'>
            <h2>country name :{name.common}</h2>
            <p> population : {population}</p>
            <h1>region   : {region}</h1>
            <p>{area}</p>
            
        </div>
    );
};

export default County;