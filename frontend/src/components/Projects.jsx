import '../App.css';
import {useState} from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Switcher from "./Switcher.jsx";
import CButton from "./CButton.jsx";
import code from "../assets/icons/code.png"
import Loader from "./Loader.jsx";


function Projects({projects = [], loading}) {
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
            <p style={{zIndex: '0'}}>PROJECTS</p>
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
                {loading ? <Loader/> : finalList.map(({
                                                          name,
                                                          deployLink,
                                                          pictureUrl,
                                                          tech,
                                                          features,
                                                          repository
                                                      }, index) => (
                    <div className='single-project-card' key={index}>
                        <div className='single-project-top'>
                            <div className='project_name'>{name}</div>
                            {!deployLink ? null :
                                <CButton className='view-project-website-btn plain-button-with-underline'
                                         variant='outlined' color='primary' href={deployLink}>
                                    <ArrowOutwardIcon/></CButton>
                            }
                        </div>
                        <div className='single_project'
                             style={{
                                 backgroundImage: `url(${pictureUrl})`
                             }}
                        >
                            <div className='project-details-container'>
                                {!tech ? null :
                                    <div>{tech}</div>
                                }
                                {!features ? null :
                                    <div>{features}</div>
                                }
                                {!repository ? null :
                                    <a target="_blank" href={repository}>
                                        <img className='code-icon' src={code} style={{width: '35px', opacity: '0.7'}}/>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects