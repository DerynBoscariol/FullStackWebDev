import {useContext} from "react";
import {CurrencyContext} from "../context/CurrencyContext";

export default function Product(props) {
  const {currency} = useContext(CurrencyContext);
  return (
    <div>
      <h2>{props.name}</h2>
      <div>${props.price} {currency}</div>
    </div>
  )
}