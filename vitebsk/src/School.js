function School(props) {
    return (
        <div>
            <h2 style={{color:"green"}}>{props.school.number}</h2>
            <p style={{color:"red"}}>{props.school.adress}</p>
            <p style={{color:"black"}}>{props.school.students}</p>
        </div>
    )
}

export default School