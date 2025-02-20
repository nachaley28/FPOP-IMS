import React, { useState } from 'react';
import styled from 'styled-components';

const OutStockWrapper = styled.div`
  background-image: url(/img/14.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  height: 100vh; 
  overflow: auto;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
`;

const ProductWrapper = styled.div`
  width: 250px;
  text-align: center;
  border: 1px solid #002d62 ;
  padding: 20px;
  margin-top: 100px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #FFF2F2;
`;

const ProductName = styled.h2`
  font-size: 1.4em;
  font-weight: bold;
  margin: 10px 0;
  text-decoration: ${({ isOutOfStock }) => (isOutOfStock ? 'line-through' : 'none')};
  color: ${({ isOutOfStock }) => (isOutOfStock ? ' #002d62' : '#333')};
`;

const ProductPrice = styled.p`
  font-size: 1.1em;
  color: ${({ isOutOfStock }) => (isOutOfStock ? '#ff0000' : '#333')};
  margin: 10px 0;
`;

const AddToCartButton = styled.button`
  padding: 12px 16px;
  background-color: ${({ disabled }) => (disabled ? '#d3d3d3' : 'red')};
  color: white;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
  font-size: 1em;
  border-radius: 5px;
  margin: 10px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => !disabled && '#2d9c1a'};
  }
`;

const RestockButton = styled.button`
  padding: 10px 15px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 1em;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:green;
  }
`;

const RestockNotification = styled.p`
  font-size: 1em;
  color: #4caf50;
  margin-top: 10px;
  font-weight: bold;
`;

const OutOfStockDetails = styled.div`
  margin-top: 10px;
  background-color: #fff3e0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ff9800;

  p {
    font-size: 0.9em;
    margin: 5px 0;
    color: #ff5722;
  }
`;

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%; /* Ensure the width takes up full available space */
  margin: 0 auto;
  padding: 20px;
`;

const handleRestock = () => {
  alert('You will be notified once the product is restocked!');
};

const Product = ({ name, price, isOutOfStock, stockOutDate, stockOutReason }) => {
  const [isRestocked, setIsRestocked] = useState(false);

  const requestRestock = () => {
    setIsRestocked(true);
    handleRestock(); 
  };

  return (
    <ProductWrapper>
      <ProductName isOutOfStock={isOutOfStock}>{name}</ProductName>
      <ProductPrice isOutOfStock={isOutOfStock}>
        {isOutOfStock ? 'Out of Stock' : `$${price}`}
      </ProductPrice>
      <AddToCartButton disabled={isOutOfStock}>
        {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
      </AddToCartButton>

      {isOutOfStock && !isRestocked && (
        <>
          <RestockButton onClick={requestRestock}>Request Restock</RestockButton>
          <OutOfStockDetails>
            <p><strong>Out of Stock Since:</strong> {stockOutDate}</p>
            <p><strong>Reason:</strong> {stockOutReason}</p>
          </OutOfStockDetails>
        </>
      )}

      {isRestocked && <RestockNotification>Restock Request Sent!</RestockNotification>}
    </ProductWrapper>
  );
};

const ProductList = ({ products }) => {
  return (
    <ProductListWrapper>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          isOutOfStock={product.isOutOfStock}
          stockOutDate={product.stockOutDate}
          stockOutReason={product.stockOutReason}
        />
      ))}
    </ProductListWrapper>
  );
};

function OutStock() {
  const products = [
    {
      name: 'Condom',
      price: 29.99,
      isOutOfStock: true,
      stockOutDate: '2025-02-15',
      stockOutReason: 'Supplier delay',
    },
    {
      name: 'Face Mask',
      price: 19.99,
      isOutOfStock: true,
      stockOutDate: '2025-02-10',
      stockOutReason: 'High demand',
    },
    {
      name: 'Pills',
      price: 49.99,
      isOutOfStock: true,
      stockOutDate: '2025-01-20',
      stockOutReason: 'High demand',
    },
    {
      name: 'IUD',
      price: 39.99,
      isOutOfStock: true,
      stockOutDate:'2025-01-24',
      stockOutReason: 'Transferred',
    },
  ];

  return (
    <OutStockWrapper>
      <ProductList products={products} />
    </OutStockWrapper>
  );
}

export default OutStock;
