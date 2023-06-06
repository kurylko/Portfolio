import '../App.css';
import {useState} from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


function Projects({projects = []}) {

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


    const filteredProjects = projects.filter((project) => project.framework === selectedFramework && project.isShown === true);

    const finalList = selectedFramework === "" ? projects : filteredProjects;


    return (
        <div className='projects'>
            PROJECTS
            <div className='menu-container'>
                <div className='tech_menu'>
                    <ul>
                        <li className='allFrameworks'>
                            <button className='disabled_link'
                                    onClick={onClickAllFrameworks}
                                    style={{borderBottom: (selectedFramework !== "") ? 'transparent' : '1px solid rgb(207, 95, 95)'}}>
                                ALL
                            </button>
                        </li>


                        {filteredFrameworks.map((element, index) => (
                            <li className='single_framework'
                                key={index}
                            >
                                <button className='disabled_link'
                                        onClick={() => setSelectedFramework(element)}
                                        style={{borderBottom: (selectedFramework !== element) ? 'transparent' : '1px solid rgb(207, 95, 95)'}}>
                                    {`${element}`} </button>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className='js-ts-switcher'>JS/TS switcher</div>
            </div>

            <div className='projects_container'>

                {finalList.map((project, index) => (
                    <div className='single_project'
                         style={{
                             //backgroundImage: "url(" + project.pictureUrl + ")",
                             backgroundImage: `url(${project.pictureUrl})`,
                             backgroundPosition: 'center',
                             backgroundSize: 'cover',
                             position: 'relative',
                         }}
                         key={index}
                    >
                        <div style={{
                            position: 'absolute',
                            width: "100%",
                            height: "100%",
                            background: "white",
                            opacity: "0.5"
                        }}></div>
                        <div className='project_name'>{project.name}</div>


                        <div className='projects_btns'>
                            {!project.deployLink ? null :
                                <a href={project.deployLink}>
                                    <div className='view_btn'>DEPLOY</div>
                                </a>
                            }

                            <Popup
                                className="pop_up"
                                position="center center"
                                width="500px"
                                trigger={<p className="projects_modal_trigger"> Description </p>}
                            >
                                <div className="my_popup_content">
                                    <div>{project.name}</div>
                                    <div>
                                        <img className='small_pr_pic'
                                             src={project.pictureUrl} alt={project.name}
                                        >
                                        </img></div>
                                    <div style={{width: "450px", paddingBottom: "8px"}}>{project.description}</div>
                                    {!project.features ? null :
                                        <div>Features: {project.features}</div>
                                    }
                                    <div>Status: {project.status} ({project.year})</div>
                                    {!project.repository ? null :
                                        <a style={{width: "450px"}} href={project.repository}>
                                            <div>Visit repository</div>
                                        </a>
                                    }
                                    {!project.deployLink ? null :
                                        <a style={{width: "450px"}} href={project.deployLink}>
                                            <Button variant="contained" color="secondary">
                                                <ArrowOutwardIcon/>View site</Button>
                                        </a>
                                    }
                                </div>
                            </Popup>
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


        </div>
    )
}

export default Projects