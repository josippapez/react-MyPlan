import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom'
function ProjectList({projects}){
    return (
        <div className="project-list section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Projects</span>
                </div>
            </div>
            {projects && projects.map(project=>{
                return (
                    <Link to={'/project/'+ project.id} key={project.id}>
                        <ProjectSummary project={project}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;