import Title from '../../components/Title';

export default function Skills({skills}) {
    const skillsList = skills.map((skill) => {
        return <span key={skill}>{skill} </span>
    });
    return (
        <div>
            <Title text="Skills" />
            <div className="skills-items">
                {skillsList}
            </div>
        </div>
    )
}