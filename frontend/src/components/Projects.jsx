import '../App.css';
import {useState} from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Switcher from "./Switcher.jsx";
import CButton from "./CButton.jsx";


function Projects({projects = []}) {

    // Tags filtering menu
    const filteredTags = [];

    projects.filter((element) => element.isShown === true).forEach(element => {
        if (!filteredTags.find(e => e === element.tag)) {
            filteredTags.push(element.tag || '')
        }
    });

    const [selectedTag, setSelectedTag] = useState("");


    // Frameworks filtering menu

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

//  Switcher for JS / TS filtration

    const [isChecked, setIsChecked] = useState(false);
    const handleChangeLanguage = (event) => {
        setIsChecked(!isChecked)
    };

// Forming final list of projects to render

    const filteredProjects = projects.filter((project) => {
        let isMatchedByVisibility = project.isShown === true;
        let isMatchedByFramework = project.framework === selectedFramework || !selectedFramework;
        let isMatchedByLanguage = project.language === 'TypeScript' && isChecked || project.language !== 'TypeScript' && !isChecked;
        let isMatchedByTag = project.tag === selectedTag || !selectedTag;

        return (
            isMatchedByVisibility &&
            isMatchedByFramework &&
            isMatchedByLanguage &&
            isMatchedByTag
        )
    });

    const finalList = filteredProjects;

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
                <div className='js-ts-switcher'>
                    <Switcher
                        isChecked={isChecked}
                        handleChangeLanguage={handleChangeLanguage}
                    />
                </div>


            </div>

            <div className='projects_container'>

                {finalList.map((project, index) => (
                    <div className='single_project'
                         key={index}
                         style={{
                             backgroundImage: `url(${project.pictureUrl})`
                         }}
                    >
                        <div className='project_pic_cover'></div>
                        <div className='project_name'>{project.name}</div>


                        <div className='projects_buttons'>
                            {!project.deployLink ? null :
                                <a href={project.deployLink}>
                                    <CButton className='view_btn' variant="outlined" color="secondary">
                                        <ArrowOutwardIcon/></CButton>
                                </a>
                            }

                            <Popup
                                className="pop_up"
                                position="center center"
                                width="500px"
                                trigger={<p className="projects_modal_trigger"> DESCRIPTION </p>}
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
                                            <CButton variant='contained' color='primary'>
                                                <ArrowOutwardIcon/>View site</CButton>
                                        </a>
                                    }
                                </div>
                            </Popup>
                        </div>
                    </div>
                ))}
            </div>

            <div className='tag_menu'>
                <ul className='tags-list'>
                    {filteredTags.map((element, index) => (
                        <li className='single_tag'>
                            <button
                                onClick={() => setSelectedTag(element)}> {`#${element}`} </button>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default Projects