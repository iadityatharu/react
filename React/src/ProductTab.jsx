import "./App.css";
import Product from "./Product.jsx";
import "./Product.css";
export default function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product title="Logical Mx Master" idx={0} />
      <Product title="Apple Pencil(2nd Gen)" idx={1} />
      <Product title="Zebronics zeb-transformer" idx={2} />
      <Product title="Petronics Toad" idx={3} />
    </div>
  );
}
