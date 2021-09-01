import React from 'react';
import ProjectElement from './projectElement';
import Task from './task';
import '../styles/listStyle.css';

const List = () => {
    return (
        <div className="list-container">
            <div className="list-header">
            <p className="list-header-title">To do</p>
            <button className="list-header-add">+</button>
            </div>
            <ProjectElement />
<Task />
        </div>
    )
}

export default List;