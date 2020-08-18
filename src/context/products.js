import React from "react";
import { featuredProducts } from "../utils/helpers";
import { localProducts } from "../utils/localProducts";

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    let response = localProducts;
    const featured = featuredProducts(response);
    setProducts(response);
    setFeatured(featured);
    setLoading(false);
    return () => {};
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
