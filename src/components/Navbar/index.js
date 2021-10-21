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
        <NavLink to='/home' activeStyle>
            DashBoard
        </NavLink> 
		<NavLink to='/lessons' activeStyle>
			Lessons
		</NavLink>
		<NavLink to='/calendar' activeStyle>
			Calendar
		</NavLink>
		<NavLink to='/curriculum' activeStyle>
			Curriculum
		</NavLink>
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;