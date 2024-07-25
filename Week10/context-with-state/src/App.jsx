import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import {CurrencyContext} from "./context/CurrencyContext";
import {useState} from "react";

function App() {
  const [currency, setCurrency] = useState("CAD");
  return (
    <CurrencyContext.Provider value={{currency, setCurrency}}>
      <div className="page">
        <Header />
        <main id="main">
          <ProductList />
        </main>
        <Footer />
      </div>
    </CurrencyContext.Provider>
  );
}

export default App
