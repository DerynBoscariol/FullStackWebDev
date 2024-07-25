import Product from "./Product";

export default function ProductList() {
  let products = [
    {
      id: "1",
      name: "Product 1",
      price: "2.00"
    },
    {
      id: "2",
      name: "Product 2",
      price: "5.50"
    }
  ];
  return (
    <>
      <h1>Products</h1>
      {
        products.map((p) => (
          <Product key={p.id} name={p.name} price={p.price} />
        ))
      }
    </>
  );
}