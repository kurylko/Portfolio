import CButton from "./CButton.jsx";
import VisibilityIcon from '@mui/icons-material/Visibility';
import resume from '../assets/pdf/resume_Valeriia_Kurylko_frontend.pdf';


function ResumeLabel() {

    return (
        <div className='resume-label'>
            <a href={resume} target="_blank" className='resume-label'>
                <CButton variant='contained' className='resume-label-button'><VisibilityIcon/>resume</CButton>
            </a>
        </div>
    )
}

export default ResumeLabel