import Title from '../../components/Title';

export default function Summary({summary}) {
    return (
        <>
            <Title text="Summary" />
            <p>{summary}</p>
        </>
    )
}