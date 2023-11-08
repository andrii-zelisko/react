import Title from '../../components/Title';
import Accordion from 'react-bootstrap/Accordion';

export default function Experience({experience}) {
    const experienceList = experience.map( (item, index) => {
        return (
            <Accordion.Item eventKey={index} key={item.company}>
                <Accordion.Header>{item.company}</Accordion.Header>
                <Accordion.Body>
                    <div>{item.position}</div>
                    <div>{item.date}</div>
                    <div>{item.description}</div>
                    <div>{item.technologies}</div>
                </Accordion.Body>
            </Accordion.Item>
        )
    } )
    return (
        <>
            <Title text="Experience" />
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                  {experienceList}
            </Accordion>
        </>
    )
}