import Title from '../../components/Title';
import { Box, Typography } from '@mui/material';

const whiteColor = '#ffffff';
const mainBlue = '#052d8c';

export default function Skills({ skills }) {
    const skillsList = skills.map( ( skill ) => {
        return <Typography component="span" key={ skill } sx={{
            background: mainBlue,
            color: whiteColor,
            padding: '5px 10px',
            borderRadius: '15px',
            mr: '5px',
            display: 'inline-block',
            mb: '8px',
            fontSize: 14
        }}>{ skill }</Typography>
    });
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Title text="Skills" style={{ textAlign: 'center' }} />
            <Box lg={3} md={3} sm={6} xs={12} sx={{ mt: '20px' }}>
                {skillsList}
            </Box>
        </Box>
    )
}