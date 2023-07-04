import React from 'react'

const ProjectCards = () => {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img className="img" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=60" alt="Project 1" />
                </div>
                <div className="cart-content">
                    <div className="card-title">Project Title</div>
                    <div className="card-description">
                        <div className="card-btn">
                            <div className="btn-gradient project-detail">JavaScript</div>
                            <div className="btn-gradient project-detail">React</div>
                        </div>
                        Project Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto labore ut deleniti deserunt esse sed quam excepturi, fugit modi a incidunt sequi error eum omnis.
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCards
