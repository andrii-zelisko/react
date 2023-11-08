import Title from '../../components/Title';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Language({language}) {
    const langList = language.map( (item) => {
        return <ListGroup.Item key={item.name}>{item.name + ": " + item.level}</ListGroup.Item>
    });
    return (
        <>
            <Title text="Language" />
            <ListGroup>
                {langList}
            </ListGroup>
        </>
    )
}
