import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Avatar from './Avatar'
import imgurl from '../asset/logo_dark.jpg'
import { Typography } from '@material-ui/core';
const Navbar = () => {
return (
	<>
	<Nav>

      <NavMenu>
        <Avatar  img={imgurl}/>
		<NavLink to='/homepage' activeStyle>
		<Typography><strong>Home</strong></Typography>	
		</NavLink>
		<NavLink to='/resources' activeStyle>
		<Typography><strong>Resources</strong></Typography>	
		</NavLink>
		<NavLink to='/roadmap' activeStyle>
		<Typography><strong>Roadmap</strong></Typography>
		</NavLink>
		<NavLink to='/discuss' activeStyle>
    	<Typography><strong>Discuss</strong></Typography>
		</NavLink>
		<NavLink to='/leaderboard' activeStyle>
    <Typography ><strong>Leaderboard</strong></Typography>
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'><Typography><strong>Login</strong></Typography></NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
