export default function Language({ language }) {
    const langList = language.map( (item, index) => {
        return ( item.name + ( index !== language.length - 1 ? " - " : "" ) );
    });
    return (
        <>
            { langList }
        </>
    )
}
