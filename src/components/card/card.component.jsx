import React from 'react'
import './card.styles.css'

export const Card = props =>(
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`} alt="" />
        <h1>{props.monster.name}</h1>
        <span>{props.monster.email}</span>
    </div>
);