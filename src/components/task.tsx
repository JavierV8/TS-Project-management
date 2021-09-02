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
                    <button onClick={() => updateData()}>X</button>
                </div>
            </div>
        )}
        </>
    )
}

export default Task;