import Title from '../../components/Title';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Skills({skills}) {
    const skillsList = skills.map((skill) => {
        return <ListGroup.Item key={skill}>{skill}</ListGroup.Item>
    });
    return (
        <div>
            <Title text="Skills" />
            <ListGroup>
                {skillsList}
            </ListGroup>
        </div>
    )
}