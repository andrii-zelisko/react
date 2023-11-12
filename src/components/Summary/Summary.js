import Title from '../../components/Title';

export default function Summary({summary, name}) {
    return (
        <>
            <Title text="About Us" />
            <p>I'm <b>{name}</b></p>
            <p>{summary}</p>
        </>
    )
}