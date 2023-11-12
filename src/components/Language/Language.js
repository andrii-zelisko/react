export default function Language({language}) {
    const langList = language.map( (item, index) => {
        return <div>{item.name + (index !== language.length - 1 ? " - " : "")}</div>
    });
    return (
        <>
            {langList}
        </>
    )
}
