export default function Service(props) {

    return(
        <li>
            <p className="sName">{props.name}</p>
            <p>{props.price}</p>
        </li>
    )
}