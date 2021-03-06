
import './HeroImg.scss';
import React from 'react';
import img from '../../assets/img/res.jpg';
import { Link, useHistory } from 'react-router-dom';

export function HeroImg() {
    const history = useHistory();
    const moveTo = () => {
        history.push('/restaurant-register');
    }
    const showRests = () => {
        window.scrollTo(600, 600);
    }
    return (
        <div className="hero-img">
            <h1></h1>
            <h2><span>FooderPlace</span> All the best restaurants in one place.</h2>
            <button className="btn-3" onClick={showRests}>FOOD NOW</button>
            <button className="add-res" onClick={moveTo}>JOIN</button>
            <img src={img}></img>
        </div>
    )
}


