import CButton from "./CButton.jsx";
import VisibilityIcon from '@mui/icons-material/Visibility';
import resume from '../assets/pdf/CV_Valeriia_Kurylko_en.pdf';


function ResumeLabel() {

    return (
        <div className='resume-label'>
            <CButton variant='contained' className='resume-label-button' href={resume} target="_blank" rel="noopener noreferrer"><VisibilityIcon/>resume</CButton>
        </div>
    )
}

export default ResumeLabel