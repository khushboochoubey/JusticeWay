import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ name, detail, prize, link }) => {
    return ( 
        <div className="card">
            <div className="card-header">
                <h3>{name}</h3>
            </div>
            <div className="card-body">
                <p>{detail}</p>
            </div>
            <div className="card-footer">
                <div className="prize">{prize}</div>
                <Link to={`/detail/${link}`}>
                    <button className="view-detail-button">View Detail</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;
