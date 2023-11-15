import Title from '../../components/Title';
import { Box, Typography } from '@mui/material';

const mainColor = '#052d8c';

export default function Summary({ summary, name }) {
    return (
        <>
            <Title text="About Us" />
            <Box>
                <Typography component="p" sx={{ fontWeight: 'bold', fontSize: 16, pl: '3px', mt: 1, mb: 1, color: mainColor }} >
                    I'm { name }
                </Typography>
                <Typography component="p" sx={{ fontSize: 14 }}>{ summary }</Typography>
            </Box>
        </>
    )
}