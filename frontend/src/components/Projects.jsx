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
                <div className='single_project' style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"+")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat' }}>
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