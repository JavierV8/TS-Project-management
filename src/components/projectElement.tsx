import React from 'react';
import '../styles/projectElementStyle.css';

const ProjectElement = () => {
    return (
        <div className="project-element">
            <p className="task-title">Title of the task that has been created...</p>
            <div className="task-tag-container">
            <span className="task-tag">Web</span>
            <span className="task-tag">Component</span>
            <span className="task-tag">Component</span>
            <span className="task-tag">Component</span>
            </div>

        </div>
    )
}

export default ProjectElement;