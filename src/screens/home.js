import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
   
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <div
        style={{
          display: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <h1>Welcome to Ready Set Learn</h1>
      </div>
      
      </div>
   
  );
};
  
export const NavLink = styled(Link)`
color: #00000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #fffcfc;
}
`;
export default Home;
