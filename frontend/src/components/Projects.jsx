import '../App.css';
import {useState} from 'react';
import "reactjs-popup/dist/index.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Switcher from "./Switcher.jsx";
import CButton from "./CButton.jsx";
import gitHubLogo from '../../public/github1.png';


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

        return (
            isMatchedByVisibility &&
            isMatchedByFramework &&
            isMatchedByLanguage
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
                            <button className='plain-button-with-underline'
                                    onClick={onClickAllFrameworks}>
                                ALL
                            </button>
                        </li>
                        {filteredFrameworks.map((element, index) => (
                            <li className='single_framework'
                                key={index}
                            >
                                <button className='plain-button-with-underline'
                                        onClick={() => setSelectedFramework(element)}
                                >
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
                    <div className='single-project-content'>
                        <div className='single-project-line'>
                            <div className='project_name'>{project.name}</div>
                            {!project.deployLink ? null :
                                <a href='/home'>
                                    <CButton className='view-project-website-btn' variant='outlined' color='primary'>
                                        <ArrowOutwardIcon/></CButton>
                                </a>
                            }
                        </div>
                        <div className='single_project'
                             key={index}
                             style={{
                                 backgroundImage: `url(${project.pictureUrl})`
                             }}
                        >
                            <div className='project-details-container'>
                                {!project.tech ? null :
                                    <div>{project.tech}</div>
                                }
                                {!project.features ? null :
                                    <div>{project.features}</div>
                                }
                                {!project.repository ? null :
                                    <a href={project.repository}>
                                        <img src={gitHubLogo} style={{width: "45px"}}/>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className='tags-list'>
                {filteredTags.map((element, index) => (
                    <div className='single-tag'></div>
                ))}
            </div>

        </div>
    )
}

export default Projects