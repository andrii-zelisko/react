import { useRef } from 'react';
import { Envelope, Linkedin, Telephone } from 'react-bootstrap-icons';

export default function Contact({ contact }) {
    const contactIcon = useRef(null);
    const contactText = useRef(null);
    const contactList = contact.map( (list) => {
        switch ( list.text ) {
            case 'email': {
                contactIcon.current = <Envelope />;
                contactText.current = <a href={ "mailto:" + list.description }>{ list.description }</a>
                break;
            }
            case 'linkedin': {
                contactIcon.current = <Linkedin />;
                contactText.current = <a href={ list.description }>LinkedIn</a>
                break;
            }
            case 'phone': {
                contactIcon.current = <Telephone />;
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
            <div className={ list.text }>
                {contactIcon.current} : {contactText.current}
            </div>
        )
    })
    return (
        <div className="candidate-contact-block">
            {contactList}
        </div>
    )
}