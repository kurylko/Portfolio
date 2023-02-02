import '../App.css';
import { useState } from 'react';

function Projects({ projects = [] }) {

    const tags = projects.map((project) => project.tag);

    const filteredFrameworks = [];

    projects.forEach(element => {
        if (!filteredFrameworks.find(e => e === element.framework)) {
            filteredFrameworks.push(element.framework || '')
        }
    });


    const [selectedFramework, setSelectedFramework] = useState("");

    const onClickAllFrameworks = () => {
        setSelectedFramework("");
    };


    const filteredProjects = projects.filter((project) => project.framework === selectedFramework);
    console.log("filtered", filteredProjects)

    const finalList = selectedFramework === "" ? projects : filteredProjects;



    return (
        <div className='projects'>
            PROJECTS
            <div className='tech_menu'>
                <ul>
                    <li className='allFrameworks'>
                        <button className='disabled_link'
                            onClick={onClickAllFrameworks}
                            style={{ borderBottom: (selectedFramework !== "") ? 'transparent' : '1px solid rgb(207, 95, 95)' }}>
                            ALL </button>
                    </li>


                    {filteredFrameworks.map((element, index) => (
                        <li className='single_framework'
                            key={index}
                        >
                            <button className='disabled_link'
                                onClick={() => setSelectedFramework(element)}
                                style={{ borderBottom: (selectedFramework !== element) ? 'transparent' : '1px solid rgb(207, 95, 95)' }}>
                                {`${element}`} </button>
                        </li>
                    ))}

                </ul>
            </div>
            <div className='projects_container'>

                {finalList.map((project, index) => (
                    <div className='single_project'
                        style={{
                            //backgroundImage: "url(" + project.pictureUrl + ")",
                            backgroundImage: `url("${project.pictureUrl}")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                        key={index}
                    >
                        <div>{project.name}</div>
                        <div className='view_btn'>view
                            <a href={project.deployLink}></a>
                        </div>
                    </div>
                ))}


            </div>


            <div className='tag_menu'>
                <div>Tags:</div>

                {tags.map((element, index) => (
                    <div className='single_tag' key={index}> #{element} </div>
                ))}
            </div>
        </div >
    )
}

export default Projects