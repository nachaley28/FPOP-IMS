import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaBoxOpen, FaBox, FaExchangeAlt, FaClipboardCheck, FaBell,FaWarehouse,FaPowerOff} from "react-icons/fa";


const Sout = styled.div`
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
  top: 0;
  left: 0;
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
  display: flex;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
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
const All = styled.div`
 z-index: 1;
  margin-top: 20px;
  position: relative;
  overflow: auto; 
  scrollbar-width: none;
  -ms-overflow-style: none; 
  margin-top: 30px;
`;
const Form = styled.div`

 
  width:1000px;
  margin-left: 325px;
  margin-right: auto;
  padding: 10px;
  background-color:transparent;
  border-radius: 10px;
  border:2px solid  #002d62;
  box-shadow: 0 5px 12px white;
  display: flex;
  flex-direction: column;

   h2 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #002d62;
    margin-bottom: 10px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  width: 100%; 
  box-sizing: border-box;
  transition: 0.3s;
  background-color:white;
  color:black;
  border:2px solid  #002d62;

  &:focus {
    border-color: #0056b3;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 86, 179, 0.3);
  }
`;

const FLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color:  #002d62;
  margin-bottom: 5px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const InButton = styled.button`
  padding: 14px 20px;
  background-color:#002d62;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  width: 50%;

  &:hover {
    background-color:rgb(4, 36, 60);
  }
`;


const Transactions = styled.div`
  width: 1000px;
  margin-top: 50px;
  margin-left: 325px;
  margin-right: auto;
  padding:10px;
  border-radius:15px;
  background-color:white;
   box-shadow: 0 4px 8px black;

  h2{
  font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #002d62;
    margin-bottom: 10px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
`;

const Transaction = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px black;
  border-collapse: collapse;
  border: 1px solid black;
  
`;

const TTableHeader = styled.th`
  padding: 10px;
  background-color:#7CB9E8;
  color: black;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ddd;
   width: auto;
`;

const TTableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  font-size: 16px;
  color: black;
`;


function Stockin() {

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
        
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [expiration, setExpiration] = useState('');
  const [receivedBy, setReceivedBy] = useState('');
  const [supplier, setSupplier] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [recentStockIn, setRecentStockIn] = useState([
    {
      date: '2025-02-17',
      product: 'Product A',
      quantity: 100,
      category: 'Contraceptives',
      expiration: '2026-02-17', 
      receivedBy: 'John Doe',
      supplier:'Rose Pharmacy' ,
      additionalInfo: 'Delivered on time', 
    }
  ]);

  const handleStockInSubmit = (e) => {
    e.preventDefault();
    
    setRecentStockIn([
      ...recentStockIn,
      { date: new Date().toISOString().split('T')[0], product: productName, quantity: quantity,
        category:category,expiration:expiration,receivedBy:receivedBy,supplier:supplier, additionalInfo: additionalInfo },
    ]);
    setProductName('');
    setQuantity('');
    setCategory('');
    setExpiration('');
    setReceivedBy('');
    setSupplier('');
    setAdditionalInfo('');
  };

  return (
    <Sout>
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
      
<All>
      <Form>
  <h2>Stock In Form</h2>
  <form onSubmit={handleStockInSubmit}>
    <FormGroup>
      <InputWrapper>
        <FLabel>Product Name</FLabel>
        <Input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </InputWrapper>

      <InputWrapper>
        <FLabel>Quantity</FLabel>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </InputWrapper>

      <InputWrapper>
        <FLabel>Category</FLabel>
        <Input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </InputWrapper>

      <InputWrapper>
        <FLabel>Expiration</FLabel>
        <Input
          type="date"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          required
        />
      </InputWrapper>

      <InputWrapper>
        <FLabel>Received By</FLabel>
        <Input
          type="text"
          value={receivedBy}
          onChange={(e) => setReceivedBy(e.target.value)}
          required
        />
      </InputWrapper>

      <InputWrapper>
        <FLabel>Supplier</FLabel>
        <Input
          type="text"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          required
        />
      </InputWrapper>

      <InputWrapper style={{ gridColumn: "span 2" }}>
        <FLabel>Additional Info</FLabel>
        <Input
          type="text"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />
      </InputWrapper>
    </FormGroup>

    <ButtonWrapper>
      <InButton type="submit">Submit</InButton>
    </ButtonWrapper>
  </form>
</Form>


      {/* Recent Stock In Transactions */}
      <Transactions>
        <h2>Recent Stock In Transactions</h2>
        <Transaction>
          <thead>
            <tr>
              <TTableHeader>Date</TTableHeader>
              <TTableHeader>Product</TTableHeader>
              <TTableHeader>Quantity</TTableHeader>
              <TTableHeader>Category</TTableHeader>
              <TTableHeader>Expiration</TTableHeader>
              <TTableHeader>Supplier</TTableHeader>
              <TTableHeader>Received By</TTableHeader>
              <TTableHeader>Additional Info</TTableHeader>
            </tr>
          </thead>
          <tbody>
            {recentStockIn.map((transaction, index) => (
              <tr key={index}>
                <TTableCell>{transaction.date}</TTableCell>
                <TTableCell>{transaction.product}</TTableCell>
                <TTableCell>{transaction.quantity}</TTableCell>
                <TTableCell>{transaction.category}</TTableCell>
                <TTableCell>{transaction.expiration}</TTableCell>
                <TTableCell>{transaction.supplier}</TTableCell>
                <TTableCell>{transaction.receivedBy}</TTableCell>
                <TTableCell>{transaction.additionalInfo}</TTableCell>
              </tr>
            ))}
          </tbody>
        </Transaction>
      </Transactions>
      </All>
    </Sout>
  );
}

export default Stockin;
