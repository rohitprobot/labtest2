import React from 'react';

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>productCategory</th>
          <th>Supplier</th>
          <th>Price</th>
          
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.productName}</td>
            <td>{product.productCategory}</td>
            <td>{product.supplier}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
