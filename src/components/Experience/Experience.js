import Title from '../../components/Title';
import { Grid, CardContent, Typography } from '@mui/material';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const iconColor = '#406ea4';
const darkBlue = '#1a253f';
const blue = '#50649c';

export default function Experience({ experience, iconSize }) {
    const experienceList = experience.map( (item, index) => {
        const fSize = 14;
        return (
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <CardContent key={ item.company } sx={{ padding: 0, mt: 2 }}>
                    <Typography sx={{ fontSize: fSize, color: blue, fontWeight: 'bold' }}>
                        { item.date }
                    </Typography>
                    <Typography sx={{ fontSize: fSize }}>
                        { item.company }
                    </Typography>
                    <Typography sx={{ fontSize: fSize, fontWeight: 'bold', color: darkBlue }}>
                        { item.position }
                    </Typography>
                    <Typography sx={{ fontSize: fSize }}>
                        { item.description }
                    </Typography>
                    <Typography sx={{ fontSize: fSize, color: blue }}>
                        { item.technologies }
                    </Typography>
                </CardContent>
            </Grid>
        )
    } )
    return (
        <>
            <Title text="Experience" iconComponent={ <WorkOutlineOutlinedIcon sx={{ fontSize: iconSize, color: iconColor }} /> } />
            <Grid container spacing={1}>
                { experienceList }
            </Grid>
        </>
    )
}