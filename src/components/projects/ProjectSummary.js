import React from 'react';

function ProjectSummary({project}){
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Josip Papež</p>
                <p className="grey-text">1st September, 12Am</p>
            </div>
        </div>
    )
}

export default ProjectSummary;