import Language from "../Language/Language";
import { Box, Typography } from '@mui/material';

const mainColor = '#052d8c';

export default function About({ birthday, language, nationality, interest }) {
    return (
        <Box sx={{ mt: 5 }}>
            <Box sx={{ mb: 1, fontSize: 14 }}>
                <Typography component="span" sx={{ fontSize: 14, fontWeight: 'bold', color: mainColor }} >Birthday</Typography>
                <Typography component="span" sx={{ fontSize: 14, pl: '15px', pr: '15px', color: mainColor }} >:</Typography>
                { birthday }
            </Box>
            <Box sx={{ mb: 1, fontSize: 14 }}>
                <Typography component="span" sx={{ fontSize: 14, fontWeight: 'bold', color: mainColor }} >Spoken Language</Typography>
                <Typography component="span" sx={{ fontSize: 14, pl: '15px', pr: '15px', color: mainColor }} >:</Typography>
                <Language language={language} />
            </Box>
            <Box sx={{ mb: 1, fontSize: 14 }}>
                <Typography component="span" sx={{ fontSize: 14, fontWeight: 'bold', color: mainColor }} >Nationality</Typography>
                <Typography component="span" sx={{ fontSize: 14, pl: '15px', pr: '15px', color: mainColor }} >:</Typography>
                { nationality }
            </Box>
            <Box sx={{ mb: 1, fontSize: 14 }}>
                <Typography component="span" sx={{ fontSize: 14, fontWeight: 'bold', color: mainColor }} >Interest</Typography>
                <Typography component="span" sx={{ fontSize: 14, pl: '15px', pr: '15px', color: mainColor }} >:</Typography>
                { interest }
            </Box>
        </Box>
    )
}