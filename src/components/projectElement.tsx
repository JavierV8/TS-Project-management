import React from 'react';
import '../styles/projectElementStyle.css';
import { useData, useDataUpdate } from '../context/conext';


const ProjectElement = () => {
    const data = useData();
    const updateData = useDataUpdate();
    return (
        <div className="project-element">
            <p className="element-title" onClick={() => updateData()}>Title of the task that has been created...</p>
            <div className="element-tag-container">
            <span className="element-tag">Web</span>
            <span className="element-tag">Component</span>
            <span className="element-tag">Component</span>
            <span className="element-tag">Component</span>
            </div>
        </div>
    )
}

export default ProjectElement;