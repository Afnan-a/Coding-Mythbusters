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
