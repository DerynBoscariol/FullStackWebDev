import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

export default function CurrencyPicker() {
  const {setCurrency} = useContext(CurrencyContext);
  return (
    <div>
      <button onClick={() => setCurrency("CAD")}>CA</button>
      <button onClick={() => setCurrency("USD")}>US</button>
    </div>
  );
}
