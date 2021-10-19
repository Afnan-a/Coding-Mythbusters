import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav bg="dark" variant="dark" >
	
		<NavMenu>
		<Bars/> 
		<NavLink to='/welcome' activeStyle>
			Welcome
		</NavLink>
        <NavLink to='/home' activeStyle>
            Home
        </NavLink> 
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
