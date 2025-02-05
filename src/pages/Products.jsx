import React from 'react';
import { FaUser, FaBell,FaArrowDown,FaArrowUp,FaHistory } from 'react-icons/fa';
import styled from 'styled-components';


const products = [
  { id: 1, name: "Condom", category: "Contraceptive", stock: 15, status: "Low Stock" },
  { id: 2, name: "Pills", category: "Contraceptives", stock: 30, status: "Low Stock" },
  { id: 3, name: "Gloves", category: "Medical Supplies", stock: 20, status: "Low Stock" },
  { id: 4, name: "Facemask", category: "Medical Supplies", stock: 50, status: "Good" },
];


const Product = styled.div`
 display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0;
  background-image: url(/img/7.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scrollbar-width: none; 
  -ms-overflow-style: none;  
  font-family: 'Poppins', sans-serif;
  margin: 0;
 
`;
const Logo = styled.img`
  width: 110px;
  margin-right: 20px;
`;

const Topbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: transparent;
  color: white;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  -webkit-appearance: none; 
  -moz-appearance: none;    
  appearance: none;         
  overflow: auto; 
  scrollbar-width: none; 
  -ms-overflow-style: none;  
  height: fit-content;
  top: 0;
  left: 0;
`;

const Navigation = styled.div`
  display: flex;
  gap: 20px;
 margin-right: 20px;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: transparent;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 79px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  width: 90%;
  padding: 5px;
  text-align: left;
  transition: 0.3s ease;
  border-radius: 15px;
  margin-left: 10px;
  margin-top: 5px;

  &.active {
    border: none
    color: aliceblue;
  }

  &:hover {
    background-color:none
  }
`;

const SidebarLink = styled.a`
  color: #1E40AF;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size:20px;
  font-family:Times;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 30px;
`;

const ProductContainer = styled.div`
  margin-left: 250px;
  width: calc(100% - 250px);
  margin-top: 10px;
  box-sizing: border-box;
  position: relative;
`;

const ProductTable = styled.table`
  margin-left:70px;
  width: 90%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  
 

  th, td {
    padding: 12px;
    text-align: left;
    border:2px solid black;
    text-align:center;
  }

  th {
    background-color: #7CB9E8;
    color:  #1E40AF;
  }

  td {
    background-color: #F9FAFB;
    color:black;
  }

  tr:nth-child(even) td {
    background-color:rgb(84, 224, 239);
  }

  tr:hover {
    background-color: #D1D5DB;
  }
`;
const HistoryLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: orange;
  font-size: 18px;
  padding: 10px;
  transition: color 0.3s ease;
  float:left;
  background-color: transparent;
  border:2px solid orange;
  margin-right:20px;
  font-weight:bold;

  

  &:hover {
    color: orange;
  }
`;
const StockOut = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: red;
  font-size: 18px;
  padding: 5px;
  transition: color 0.3s ease;
  float:left;
  background-color:transparent;
  border:2px solid red;
  margin-right:20px;
  font-weight:bold;
  margin-bottom:10px;
  

  &:hover {
    color: red;
  }
`;
const StockIn = styled.a`
  margin-left:20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: green;
  border:2px solid green;
  font-size: 18px;
  padding: 5px;
  transition: color 0.3s ease;
  float:left;
  background-color: transparent;
  border:2px solid green;
  margin-right:20px;
  font-weight:bold;
  margin-bottom:10px;s
  

  &:hover {
    color: green;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 10px;
  float:right;
  margin-right:20px;
`;

const SearchInput = styled.input`
  padding: 15px;
  font-size: 16px;
  width: 400px;
  border: 2px solid #1E40AF;
  border-radius: 4px;
  margin-right: 10px;
  background-color:white;
  color:black;
  
   &::placeholder {
    font-size: 20px;
    background-color:white;
    font-family: 'Times New Roman', Times, serif;
  }
  

  &:focus {
    outline: none;
    border-color: #4B9CD3;
  }
`;

const SearchButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  background-color: #1E40AF;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4B9CD3;
    color: #1E40AF; 
  }
`;


function Products(){
  return (
    <Product>
      <Topbar>
        <Logo src="/img/fpop-logo.png" alt="Logo" />
        <Navigation>
          <a href="#">
            <span><FaBell size={40} color="orange" /></span>
          </a>
          <a href="#">
            <span><FaUser size={40} color="black" /></span>
          </a>
        </Navigation>
      </Topbar>

      <Sidebar>
        <SidebarList>
          <SidebarItem>
            <SidebarLink href="/home">
              <Icon>&#128202;</Icon> DASHBOARD
            </SidebarLink>
          </SidebarItem>
          <SidebarItem className="active">
            <SidebarLink href="#">
              <Icon>&#128230;</Icon> PRODUCTS
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </Sidebar>


      <ProductContainer>
        <StockIn href=""><span> <FaArrowDown size={30} color="green" /></span> STOCK IN</StockIn>
        <StockOut href=""><span><FaArrowUp size={30} color="red" /></span> STOCK OUT</StockOut>
        <HistoryLink href="#"><FaHistory size={30} color="orange" />HISTORY</HistoryLink>

        <SearchContainer>
          <SearchInput
            type="text" placeholder="Search..."/>
          <SearchButton>Search</SearchButton>
        </SearchContainer>

        <ProductTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.status}</td>
              </tr>
            ))}
          </tbody>
      

        </ProductTable>
        
      </ProductContainer>
      
    </Product>
  );
}

export default Products;
