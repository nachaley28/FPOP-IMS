import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHome, FaBoxOpen, FaBox, FaExchangeAlt, FaClipboardCheck, FaPowerOff,
         FaBell,FaWarehouse} from "react-icons/fa";


const Product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0;
  background-image: url(/img/14.png);
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
  padding: 0;
`;

const Topbar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: transparent;
  color: white;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  height: fit-content;
`;

const Logo = styled.img`
  width: 110px;
  margin-right: 20px;
`;
const UserImg = styled.img`
  width: 50px;
  height:50px;
  margin-right: 10px;
  border-radius:180px;
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
  text-align: left;
  transition: 0.3s ease;
  border-radius: 15px;
  margin: 5px 0 5px 40px;
  font-size: 18px;
  font-family: Times;
`;

const SidebarLink = styled.a`
  color: black;
  display:flex;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;


`;
const SidebarOut = styled.a`
  color: black;
  display: flex;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin-top:250px;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 30px;
`;

const ProductContainer = styled.div`
  margin-top: 10px;
  font-family: 'Arial', sans-serif;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  width: 100%;
  margin-left: 250px;
`;

const Header = styled.div`
  text-align: left;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  font-weight: bold;
  color: #002d62;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
`;

const TableHead = styled.thead`
  background-color: #7CB9E8;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  color: black;
  border: 1px solid black;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  color: black;
  border: 1px solid black;
`;

const StatusBlue = styled.span`
  color: blue;
  font-weight: bold;
`;

const StatusRed = styled.span`
  color: red;
  font-weight: bold;
`;

const StatusGreen = styled.span`
  color: green;
  font-weight: bold;
`;

const Pagination = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  background-color: ${(props) => (props.active ? 'lightgray' : 'white')};
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  ${(props) =>
    props.variant === 'edit'
      ? `background-color: #4CAF50;`
      : `background-color: #f44336;`}

  &:hover {
    opacity: 0.9;
  }
`;

let products = [
  { id: 1, name: 'Aspirin', category: 'Pain Reliever', price: 12.99, inStock: 100 },
  { id: 2, name: 'Bandages', category: 'First Aid', price: 5.49, inStock: 200 },
  { id: 3, name: 'Thermometer', category: 'Medical Equipment', price: 15.99, inStock: 50 },
  { id: 4, name: 'Cough Syrup', category: 'Cold & Cough', price: 8.99, inStock: 150 },
  { id: 5, name: 'Antiseptic', category: 'First Aid', price: 7.49, inStock: 80 },
];


export const getProducts = () => products;


export const stockIn = (productId, amount) => {
  products = products.map((product) =>
    product.id === productId
      ? { ...product, inStock: product.inStock + amount }
      : product
  );
};

export const stockOut = (productId, amount) => {
  products = products.map((product) =>
    product.id === productId
      ? { ...product, inStock: product.inStock - amount }
      : product
  );
};

function Products() {
   const navigate = useNavigate();
        function HomeNavigate() {
            navigate('/home');
        }
        function ProductNavigate() {
            navigate('/products');
        }
        function StockInNavigate() {
          navigate('/stockin');
        }
        function StockOutNavigate() {
          navigate('/stockout');
        }
        function TransferNavigate() {
          navigate('/transfers');
        }
        function StockAuditNavigate() {
          navigate('/stockaudit');
        }
  const [LocalProduct, setLocalProducts] = useState([]);
  const [amount, setAmount] = useState(0);

 

  useEffect(() => {
    setLocalProducts(getProducts());
  }, []);

  const handleStockOut = (productId) => {
    stockOut(productId, amount); 
    setLocalProducts(getProducts());
    navigate('/stockout');
  };

  const handleStockIn = (productId) => {
    stockIn(productId, amount);  
    setLocalProducts(getProducts());  
    navigate('/stockin');
  };

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));  
  };

  return (
    <Product>
      <Topbar>
        <Logo src="/img/fpop-logo.png" alt="Logo" />
        <Navigation>
          
          <a href="#">
           <UserImg src="/img/N.jpg" alt="" />
          </a>
        </Navigation>
      </Topbar>

       <Sidebar>
                <SidebarList>
                 <SidebarLink onClick={HomeNavigate}>
                  <Icon><FaHome color="black" /></Icon> Dashboard
                    </SidebarLink>
                   <SidebarLink onClick={ProductNavigate}>
                      <Icon><FaWarehouse color="yellow" /></Icon> Stock Management
                    </SidebarLink>
                    <SidebarItem>
                    <SidebarLink  onClick={StockInNavigate}>
                     <Icon><FaBoxOpen color="green" size={20} /></Icon> Stock In
                    </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                    <SidebarLink  onClick={StockOutNavigate}>
                     <Icon><FaBox color="red" size={20}/></Icon> Stock Out
                      </SidebarLink>
                      </SidebarItem>
                      <SidebarItem>
                      <SidebarLink onClick={TransferNavigate}>
                      <Icon><FaExchangeAlt color="blue" size={20} /></Icon> Stock Transfers
                      </SidebarLink>
                     </SidebarItem>
                      <SidebarItem>
                     <SidebarLink onClick={StockAuditNavigate}>
                      <Icon><FaClipboardCheck color="purple" size={20}/></Icon> Stock Audit
                      </SidebarLink>
                      </SidebarItem>  
                       <SidebarItem>
                          <SidebarOut href="/">
                           <Icon>< FaPowerOff color="red" size={30}/></Icon> Log Out
                           </SidebarOut>
                        </SidebarItem>        
                 </SidebarList>
        </Sidebar>
      

      <ProductContainer>
        <Header>
          <Title>Product List</Title>
        </Header>
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Product Name</TableHeader>
                <TableHeader>Category</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader>Quantity</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Action</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {LocalProduct.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.inStock}</TableCell>
                  <TableCell>
                  {product.inStock <= 50 ? (
                      <StatusRed>Out of Stock</StatusRed>
                    ) : product.inStock > 100 ? (
                      <StatusBlue>Over Stock</StatusBlue>
                    ) : product.inStock <= 100 ? (
                      <StatusGreen>In Stock</StatusGreen>
                    ) : null}

                  </TableCell>
                  <TableCell>
                    <ActionButton variant="edit" onClick={() => handleStockIn(product.id)}>In</ActionButton>
                    <ActionButton onClick={() => handleStockOut(product.id)}>Out</ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>

        <Pagination>
          <PageButton>Prev</PageButton>
          <PageButton active>1</PageButton>
          <PageButton>Next</PageButton>
        </Pagination>
      </ProductContainer>
    </Product>
  );
}

export default Products;
