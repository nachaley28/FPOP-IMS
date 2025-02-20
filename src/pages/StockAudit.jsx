import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaBoxOpen, FaBox, FaExchangeAlt,  FaClipboardCheck,FaBell, FaWarehouse, FaPowerOff} from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement);

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

const Audit = styled.div`
 z-index: 1;
  margin-top: 20px;
  position: relative;
  overflow: auto; 
  scrollbar-width: none;
  -ms-overflow-style: none; 
`;

const PageWrapper = styled.div`
  display:flex;
  margin-left:250px;

`;
const PChart = styled.div`
  width: 80%;
  height:300px;
  margin-left:10px;
  max-width: 300px;
  padding: 10px;
  background-color:white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px black;
  margin-top:20px;
  color:black;
  display:flex;

`;
const BChart = styled.div`
  width: 40%;  
  height: 300px; 
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px black;
  margin-top: 20px;
  color: black;
  margin-left:10px;
  display: flex;
  justify-content: center; 
  align-items: center; 

`;

const LChart = styled.div`
  width: 40%;  
  height: 300px; 
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px black;
  margin-top: 20px;
  color: black;
  margin-left:10px;
  display: flex;
  justify-content: center; 
  align-items: center; 

`;


const TableWrapper = styled.div`
 width: 1000px;
  margin-top: 50px;
  margin-left: 250px;
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
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px black;
  border-collapse: collapse;
  border: 1px solid black;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color:#7CB9E8;
  color: black;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ddd;
   width: auto;
`;

const TableCell = styled.td`
 padding: 12px;
  border: 1px solid #ddd;
  font-size: 16px;
  color: black;
  text-align:center;
`;

function StockAudit() {
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
  const [auditLogs, setAuditLogs] = useState([
    { id: 1, productName:"Condom", action: "Added", date: "2025-02-18", quantity: 50 },
    { id: 2, productName:"Gloves",action: "Removed", date: "2025-02-18", quantity: 30 },
    { id: 3, productName:"Alcohol",action: "Transferred", date: "2025-02-19", quantity: 20 },
    { id: 4, productName:"Pills",action: "Added", date: "2025-02-19", quantity: 40 },
    { id: 5, productName:"IUD",action: "Removed", date: "2025-02-20", quantity: 10 },
  ]);

  const getActionCounts = () => {
    return auditLogs.reduce((counts, log) => {
      counts[log.action] += log.quantity;
      return counts;
    }, { Added: 0, Removed: 0, Transferred: 0 });
  };

  const getProductCounts = () => {
    return auditLogs.reduce((counts, log) => {
      counts[log.productName] += log.quantity;
      return counts;
    }, { Condom: 0, Gloves: 0, Alcohol: 0, Pills: 0 ,IUD: 0   });
  };


  const actionCounts = getActionCounts();
  const productCounts = getProductCounts();

  const data = {
    labels: ["Added", "Removed", "Transferred"],
    datasets: [
      {
        label: "Stock Actions",
        data: [actionCounts.Added, actionCounts.Removed, actionCounts.Transferred],
        backgroundColor: ["#00C49A", "#FF7F50", "#FF6347"],
        borderColor: ["#00C49A", "#FF7F50", "#FF6347"],
        borderWidth: 1,
        hoverBackgroundColor: ["#00C49A", "#FF7F50", "#FF6347"],
      },
    ],
  };
  
  const data1 = {
    labels: ["Condom", "Gloves", "Alcohol","Pills","IUD"],
    datasets: [
      {
        label: "Stock Actions",
        data: [productCounts.Condom, productCounts.Gloves, productCounts.Alcohol,productCounts.Pills,productCounts.IUD],
        backgroundColor: ["blue", "red", "yellow","green","orange"],
        borderColor: ["blue", "red", "yellow","green","orange"],
        borderWidth: 1,
        hoverBackgroundColor: ["blue", "red", "yellow","green","orange"],
      },
    ],
  };
  const data2 = {
    labels: ["Condom", "Gloves", "Alcohol","Pills","IUD"],
    datasets: [
      {
        label: "Stock Actions",
        data: [productCounts.Condom, productCounts.Gloves, productCounts.Alcohol,productCounts.Pills,productCounts.IUD],
        backgroundColor: ["blue", "red", "yellow","green","orange"],
        borderColor: ["blue", "red", "yellow","green","orange"],
        borderWidth: 1,
        hoverBackgroundColor: ["blue", "red", "yellow","green","orange"],
      },
    ],
  };
  const options = {
    scales: {
      x: { 
        barThickness: 50
      },
      y: {
        beginAtZero: true
      }
    }
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
      
      <Audit>

      <PageWrapper>

        <BChart>
          <Bar data={data} option={options}/>
        </BChart>
        
        <PChart>
          <Doughnut data={data1} />
        </PChart>
        <LChart>
          <Doughnut data={data1} />
        </LChart>
        
        
        </PageWrapper>

        <TableWrapper>
        <h2 style={{ marginTop: "30px" }}>Audit Logs</h2>
        <Table>
          <thead>
            <tr>
              <TableHeader>Product Name</TableHeader>
              <TableHeader>Action</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Date</TableHeader>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log) => (
              <tr key={log.id}>
                <TableCell>{log.productName}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.quantity}</TableCell>
                <TableCell>{log.date}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
        </TableWrapper>
      </Audit>
      
    </Sout>
  );
}

export default StockAudit;
