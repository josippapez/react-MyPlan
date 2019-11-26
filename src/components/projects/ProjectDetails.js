import React from 'react'

function ProjectDetails(props) {
    const id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, rem. Ipsa dignissimos aliquam non sapiente maiores facilis ducimus dolorum tempore, accusantium corrupti! In veniam voluptas eaque alias voluptates non modi.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Josip Papež</div>
                    <div>1st September, 12am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
