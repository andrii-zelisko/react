import { Box } from '@mui/material';

const darkColor = '#1a253f';
const mainColor = '#052d8c';

export default function Title({ text, iconComponent = null }) {
    return (
        <Box sx={{
                borderBottom: '2px solid ' + mainColor,
                width: 'fit-content',
                fontSize: '1.2em',
                color: darkColor,
                marginBottom: '5px',
                letterSpacing: '2px',
                lineHeight: '1.2em',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
            { iconComponent && <Box>{ iconComponent }</Box> }
            { text }
        </Box>
    )
}