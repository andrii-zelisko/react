import { useRef } from 'react';
import { Button, Box } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact({ contact, iconSize }) {
    const contactIcon = useRef(null);
    const contactText = useRef(null);

    const contactList = contact.map( (list) => {
        switch ( list.text ) {
            case 'email': {
                contactIcon.current = <MailOutlineIcon sx={{ fontSize: iconSize }} />;
                contactText.current = <a href={ "mailto:" + list.description }>{ list.description }</a>
                break;
            }
            case 'linkedin': {
                contactIcon.current = <LinkedInIcon sx={{ fontSize: iconSize }} />;
                contactText.current = <a href={ list.description }>LinkedIn</a>
                break;
            }
            case 'phone': {
                contactIcon.current = <PhoneIcon sx={{ fontSize: iconSize }} />;
                contactText.current = <a href={ "tel:" + list.description }>{ list.description }</a>
                break;
            }
            default: {
                contactIcon.current = "";
                contactText.current = "";
                break;
            }
        }

        return (
            <Box key={ list.text }>
                <Button startIcon={ contactIcon.current } sx={{ mb: 0, pt: "2px", pb: '2px', fontSize: 12, textTransform: 'none' }} >
                    { contactText.current }
                </Button>
            </Box>
        )
    })

    return (
        <div style={{ marginTop: '40px' }}>
            { contactList }
        </div>
    )
}