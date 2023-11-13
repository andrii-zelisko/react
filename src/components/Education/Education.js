import Title from '../../components/Title';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export default function Education({education, iconSize}) {
    return (
        <>
            <SchoolOutlinedIcon sx={{fontSize: iconSize}} />
            <Title text="Education" />
            <p>{education}</p>
        </>
    )
}