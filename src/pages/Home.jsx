import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa'; 
import { FaPaperPlane, FaTimesCircle , FaExclamationTriangle,FaBoxes } from 'react-icons/fa';
import styled from 'styled-components';

const HomeContainer = styled.div`
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

const Logo = styled.img`
  width: 110px;
  margin-right: 20px;
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
   &:hover {
    
    color:white;
  }
`;


const SidebarList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  width: 90%;
  padding: 10px;
  text-align: left;
  transition: 0.3s ease;
  border-radius: 15px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-top: 10px;
  font-size:20px;
  font-family:Times;
  color: #1E40AF;
`;
const SidebarLink = styled.a`
color: #1E40AF;
`;


const Icon = styled.span`
  margin-right: 10px;
  font-size: 30px;
`;
  


const MainContent = styled.div`
  margin-left: 250px; 
  width: calc(100% - 250px);
  z-index: 1;
  margin-top: 20px;
  box-sizing: border-box;
  position: relative;
  height: calc(100vh - 100px); 
  overflow: auto; 
  scrollbar-width: none;
  -ms-overflow-style: none; 
  align-items: center;
  background-color:transparent; 
`;

const SearchBox = styled.div`
  background-color: #7CB9E8;
  width: 75vw;
  height: 15vh;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  align-items: center; 
  justify-content: flex-start;
  gap: 10px; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;
  margin-left:50px;
`;

const SearchLabel = styled.label`
  font-weight: bold;
  font-size: 24px;
  color: #1E3A8A;
  margin-bottom: 5px;
  margin-left: 30px;
  font-family: 'Times New Roman', Times, serif;
`;

const SearchInput = styled.input`
  width: 80%; 
  height: 40px;
  padding: 5px;
  margin-top: 5px;
  border-radius: 15px;
  background-color: white;
  color: black;
  font-size: 24px;
  &::placeholder {
    font-size: 24px;
    font-family: 'Times New Roman', Times, serif;
  }
  `;
const SearchButton = styled.button`
  height: 50px; 
  width:80px; 
  font-size: 30px;
  font-weight:bold;
  background:none;
  color:  #1E3A8A;
  border: none;
  padding: 0 15px;
  border-radius: 5px;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: none;
    color:black;
    border:none;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  color: #1D4ED8;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  padding: 15px;
  width: 350px;  
  height: 200px;  
  flex: 0 0 auto;  
  border-radius: 10px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.15);
  }
`;

const CardIcon = styled.span`
  font-size: 50px;  
  margin-bottom: 10px;  
  font-weight: bold;
`;

const CardText = styled.p`
  color: #1E3A8A;
  font-size: 24px; 
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
`;


const Charts = styled.div`
margin-left:45px;
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Chart = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.3s ease;
  border: 2px solid black;
   width: 550px;  
  height: 200px;  
  flex: 0 0 auto;  

  &:hover {
    transform: scale(1.02);
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.15);
  }
`;

const ChartTitle = styled.h3`
  color: #1E3A8A;
  font-size: 18px;
`;

const ChartImage = styled.img`
  width: 80%;
  max-height: 150px;
  border-radius: 8px;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Topbar>
        <Logo src="/img/fpop-logo.png" alt="" />
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
          <SidebarItem className="active">
          <SidebarLink>
            <a href="#">
              <span className="icon">&#128202;</span> DASHBOARD
            </a>
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
          <SidebarLink>
            <a href="/products">
              <span className="icon">&#128230;</span> PRODUCTS
            </a>
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </Sidebar>

      <MainContent>
        <SearchBox>
          <SearchLabel>Quick Queries?</SearchLabel>
          <SearchInput type="text" placeholder="Ask here...." />
          <SearchButton><FaPaperPlane /></SearchButton>
        </SearchBox>

        <Stats>
          <Card>
            <CardText>Out of Stocks Products</CardText>
            <CardIcon>< FaTimesCircle size={60} color="red" /></CardIcon>
            <span>12</span>
          </Card>
          <Card>
            <CardText>Low Stocks Products</CardText>
            <CardIcon><  FaExclamationTriangle size={60} color="orange" /></CardIcon>
            <span>8</span>
          </Card>
          <Card>
            <CardText>Excess Stocks Products</CardText>
            <CardIcon>< FaBoxes size={60} color="green" /></CardIcon>
            <span>5</span>
          </Card>
        </Stats>

        <Charts>
          <Chart>
            <ChartTitle>Weighted Score</ChartTitle>
            <ChartImage src="/img/image.png" alt="Pie Chart" />
          </Chart>
          <Chart>
            <ChartTitle>Ratings</ChartTitle>
            <ChartImage src="/img/line.png" alt="Line Chart" />
          </Chart>
        </Charts>
      </MainContent>
    </HomeContainer>
  );
}

export default Home;
