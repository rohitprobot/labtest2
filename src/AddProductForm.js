import React, { useState } from 'react';

const AddProductForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    productName: '',
    productCategory: '',
    supplier: '',
    price: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(product);
    setProduct({
      productName: '',
      productCategory: '',
      supplier: '',
      price: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="text" name="productName" value={product.productName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Product Category:
        <input type="text" name="productCategory" value={product.productCategory} onChange={handleChange} />
      </label>
      <br />
      <label>
        Supplier:
        <input type="text" name="supplier" value={product.supplier} onChange={handleChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" name="price" value={product.price} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" name="description" value={product.description} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
