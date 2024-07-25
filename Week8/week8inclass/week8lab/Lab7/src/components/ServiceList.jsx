import Service from "./Service";
import "./ServiceList.css";
var serviceList = [
    {
        name: "Aromatherapy Massage",
        price: "$80/hour"
    }, 
    {
        name: "Mud Bath",
        price: "$100/hour"
    },
    {
        name: "Seaweed Wrap",
        price: "$100/hour"
    },
    {
        name: "Salt Scrub",
        price: "$120/hour"
    },
    {
        name: "Hydrotherapy",
        price: "$130/hour"
    },
    {
        name: "Hot Stone Massage",
        price: "$140/hour"
    }
]

export default function ServiceList(){

    return(
        <ul>
            {
                serviceList.map((s)=>(       
                <Service 
                key={s.name + s.price}      
                name={s.name}
                price={s.price}
                />
                ))
            }
        </ul>
    )
}