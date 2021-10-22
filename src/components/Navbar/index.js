import React from 'react';
import Logo from '../ReadySetTeach.jpg';
import User from '../Profile.jpg';
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
		<img src={Logo} height="85" alt="logo"/>
		<NavLink to='/welcome' activeStyle>
			Welcome
		</NavLink>
        <NavLink to='/home' activeStyle>
            Home
        </NavLink>
		<NavLink to='/Calendar' activeStyle>
			Calendar
        </NavLink>
		<NavLink to='/Lesson Plans' activeStyle>
			Lesson Plans
        </NavLink>
		<img src={User} height="85" alt="profile"/>
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
