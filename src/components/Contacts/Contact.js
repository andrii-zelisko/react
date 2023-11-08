import Title from '../../components/Title';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Contact({contact}) {
    const contactList = contact.map( (cont) => {
        return (
            <ListGroup.Item key={cont.text}>{cont.description}</ListGroup.Item>
        )
    })
    return (
        <>
            <Title text="Contact" />
            <ListGroup>
                {contactList}
            </ListGroup>
        </>
    )
}