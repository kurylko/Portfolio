import '../App.css';

function Projects() {
    return (
        <div className='projects'>
            PROJECTS
            <div className='tech_menu'>
                <ul>
                    <li>ALL</li>
                    <li>REACT</li>
                </ul>
            </div>
            <div className='projects_container'>
                <div className='single_project'>
                    <div>name</div>
                    <button className='view_btn'>view</button>
                </div>
            </div>
            <div className='tag_menu'>
                <div>Tags:</div>
                <div className='single_tag'>tag1</div>
            </div>
        </div>
    )
}

export default Projects