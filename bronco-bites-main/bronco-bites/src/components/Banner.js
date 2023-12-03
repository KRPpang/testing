import React from 'react';
import banner from '../images/cpp.jpg';
import '../App.css';

function Banner(){
    return(
        <div className="banner">
            <img src={banner}></img>
        </div>
    );
};
export default Banner;