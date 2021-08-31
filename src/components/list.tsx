import React from 'react';
import '../styles/listStyle.css';

const List = () => {
    return (
        <div className="list-container">
            <div className="list-header">
            <p className="list-header-title">To do</p>
            <button className="list-header-add">+</button>
            </div>
            <div className="project-element"></div>
            <div className="project-element"></div>
        </div>
    )
}

export default List;