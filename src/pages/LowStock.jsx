import React, { useState } from 'react';
import styled from 'styled-components';

const LowStockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
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
  margin-top:100px;
  width: 250px;
  text-align: center;
  border: 1px solid #002d62 ;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #FFF2F2;
  position: relative;
  height: 300px;
`;

const ProductName = styled.h2`
  font-size: 1.4em;
  font-weight: bold;
  margin: 10px 0;
  color: #002d62;
`;

const ProductPrice = styled.p`
  font-size: 1.1em;
  color: black;
  margin: 10px 0;
`;

const LowStockLabel = styled.div`
  background-color: #ffcc00;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 0.9em;
  font-weight: bold;
  position: absolute;
  top: 10px;
  left: 10px;
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
    background-color: darkgreen;
  }
`;

const RestockNotification = styled.p`
  font-size: 1em;
  color: #4caf50;
  margin-top: 10px;
  font-weight: bold;
`;

const OutOfStockDate = styled.p`
  font-size: 1em;
  color: red; 
  margin: 10px 0;
`;

const ReStockDate = styled.p`
  font-size: 1em;
  color: orange; 
  margin: 10px 0;
`;
const DateWrapper = styled.div`
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

const handleRestock = () => {
  alert('You will be notified once the product is restocked!');
};

const Product = ({ name, price, stockQuantity, expectedOutOfStockDate, expectedRestockDate }) => {
  const [isRestocked, setIsRestocked] = useState(false);

  const requestRestock = () => {
    setIsRestocked(true);
    handleRestock(); 
  };

  return (
    <ProductWrapper>
      <LowStockLabel>Low Stock!</LowStockLabel>
      <ProductName>{name}</ProductName>
      <ProductPrice>{`P${price}`}</ProductPrice>
      {!isRestocked ? (
        <RestockButton onClick={requestRestock}> Immediate Restock</RestockButton>
      ) : (
        <RestockNotification>Restock request sent! You'll be notified when it's back in stock.</RestockNotification>
      )}
      <DateWrapper>
      <OutOfStockDate><strong>Expected Out-of-Stock Date:</strong> {expectedOutOfStockDate}</OutOfStockDate>
      <ReStockDate><strong>Expected Restock Date:</strong> {expectedRestockDate}</ReStockDate>
      </DateWrapper>
      
    </ProductWrapper>
  );
};

function LowStockProducts() {
  const products = [
    {
      name: 'Condom',
      price: 29.99,
      stockQuantity: 3,
      expectedOutOfStockDate: '2025-02-19',
      expectedRestockDate: '2025-02-20',
    },
    {
      name: 'Pills',
      price: 49.99,
      stockQuantity: 2,
      expectedOutOfStockDate: '2025-02-20',
      expectedRestockDate: '2025-02-22',
    },
    {
      name: 'IUD',
      price: 39.99,
      stockQuantity: 5,
      expectedOutOfStockDate: '2025-02-22',
      expectedRestockDate: '2025-02-25',
    },
    {
      name: 'Gloves',
      price: 10.99,
      stockQuantity: 5,
      expectedOutOfStockDate: '2025-02-22',
      expectedRestockDate: '2025-02-25',
    },
  ];

  return (
    <LowStockWrapper>
      {products.map((product, index) => (
        product.stockQuantity <= 5 && (
          <Product key={index} {...product} />
        )
      ))}
    </LowStockWrapper>
  );
}

export default LowStockProducts;
