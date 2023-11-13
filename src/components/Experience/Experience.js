import { useState } from 'react';
import Title from '../../components/Title';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

export default function Experience({experience, iconSize}) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const experienceList = experience.map( (item, index) => {
        return (
            <Accordion key={ item.company } expanded={expanded === 'panel' + (index + 1)} onChange={handleChange('panel' + (index + 1))}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id={"panel" + (index + 1) + "bh-header"}
                >
                    <Typography>
                        {item.company}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <b>{item.position}</b>
                    </Typography>
                    <Typography>{item.date}</Typography>
                    <Typography>{item.description}</Typography>
                    <Typography>{item.technologies}</Typography>
                </AccordionDetails>
        </Accordion>
        )
    } )
    return (
        <>
            <WorkOutlineOutlinedIcon sx={{fontSize: iconSize}} />
            <Title text="Experience" />
            {experienceList}
        </>
    )
}