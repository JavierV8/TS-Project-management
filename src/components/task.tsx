import React from 'react';
import '../styles/taskStyle.css';
import { useData, useDataUpdate } from '../context/conext';

const Task = () => {
    const data = useData();
    const updateData = useDataUpdate();
    return (
        <>
        {data.isActive && (
            <div className="task-container">
                <div className="task-content">
                    <button onClick={() => updateData()} className="task-close-button">X</button>
                    <h2 className="task-title">This is the title of the task...</h2>
                    <div className="task-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                    </div>
                    <h3>Tags</h3>
                    <button className="task-buttons task-button-acept">Continue</button>
                    <button className="task-buttons">Delete Task</button>
                </div>
            </div>
        )}
        </>
    )
}

export default Task;