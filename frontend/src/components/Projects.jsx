import '../App.css';
import {useState} from 'react';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {Switch} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


function Projects({projects = []}) {

    const tags = projects.map((project) => project.tag);
    const [selectedTag, setSelectedTag] = useState(false);

    const [selectedLanguage, setSelectedLanguage] = useState(false);

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

    const [showJs, setShowJs] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const handleChangeLanguage = (event) => {
        setIsChecked(!isChecked)
        setShowJs(!showJs)
        setSelectedLanguage(!selectedLanguage)
        console.log('swithed')
    };

    const theme = createTheme({
        components: {
            MuiSwitch: {
                styleOverrides: {
                    switchBase: {
                        // Controls default (unchecked) color for the thumb
                        color: "rgba(0, 0, 0, 0.8)"
                    },
                    colorPrimary: {
                        "&.Mui-checked": {
                            // Controls checked color for the thumb
                            color: "rgba(252, 133, 133, 1)"
                        }
                    },
                    track: {
                        // Controls default (unchecked) color for the track
                        opacity: 0.2,
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        ".Mui-checked.Mui-checked + &": {
                            // Controls checked color for the track
                            opacity: 0.7,
                            backgroundColor: "rgba(252, 133, 133, 0.5)"
                        }
                    }
                }
            }
        }
    });

// Forming final list of projects to render

    const filteredProjects = projects.filter((project) => {
        let isMatchedByVisibility = project.isShown === true;
        let isMatchedByFramework = project.framework === selectedFramework || !selectedFramework;
        let isMatchedByLanguage = project.language === selectedLanguage || !selectedLanguage;
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
                    <ThemeProvider theme={theme}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={isChecked}
                                        onChange={handleChangeLanguage}
                                    />
                                }
                                label={showJs ? 'JS' : 'TS'}
                            />
                        </FormGroup>
                    </ThemeProvider>
                </div>
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