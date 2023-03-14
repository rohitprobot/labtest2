
import './App.css';
import AddProductForm from "./AddProductForm";
import ProductTable from "./ProductTable";
import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <AddProductForm onSubmit={handleAddProduct} />
      <ProductTable products={products} />
    </div>
  );
}

export default App;
