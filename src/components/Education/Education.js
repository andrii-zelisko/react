import Title from '../../components/Title';
import { Box } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const iconColor = '#406ea4';

export default function Education({ education, iconSize }) {
    const educationLists = education.map( (list) => {
        return (
            <Box key={ list.name } sx={{ fontSize: '0.875em' }}>
                <Box sx={{ fontWeight: 'bold' }}>{ list.name }</Box>
                <Box>{ list.level }</Box>
            </Box>
        );
    });
    return (
        <>
            <Title text="Education" iconComponent={ <SchoolOutlinedIcon sx={{ fontSize: iconSize, color: iconColor }} /> } />
            { educationLists }
        </>
    )
}