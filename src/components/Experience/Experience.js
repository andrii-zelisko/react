import Title from '../../components/Title';
import Accordion from 'react-bootstrap/Accordion';

export default function Experience({experience}) {
    const experienceList = experience.map( (item, index) => {
        return (
            <Accordion.Item eventKey={index} key={item.company}>
                <Accordion.Header>{item.company}</Accordion.Header>
                <Accordion.Body>
                    <div><b>{item.position}</b></div>
                    <div className="date">{item.date}</div>
                    <div>{item.description}</div>
                    <div><i>{item.technologies}</i></div>
                </Accordion.Body>
            </Accordion.Item>
        )
    } )
    return (
        <>
            <Title text="Experience" />
            <Accordion defaultActiveKey='0'>
                  {experienceList}
            </Accordion>
        </>
    )
}