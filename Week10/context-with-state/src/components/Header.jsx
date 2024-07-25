import CurrencyPicker from "./CurrencyPicker";

export default function Header() {
  return (
    <header id="header">
      <h2 id="site-name">
        <a href="/">Test Shop</a>
      </h2>
      <CurrencyPicker />
    </header>
  );
}