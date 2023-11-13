import Language from "../Language/Language";

export default function About({ fullName, birthday, language, nationality, interest }) {
    return (
        <>
            <div><span>Name: </span>{ fullName }</div>
            <div><span>Birthday: </span> { birthday }</div>
            <div><span>Spoken Language: </span><Language language={language} /></div>
            <div><span>Nationality: </span>{ nationality }</div>
            <div><span>Interest: </span>{ interest }</div>
        </>
    )
}