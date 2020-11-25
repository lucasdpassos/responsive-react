import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
       <>
         <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    LP BlockChain
                 <MobileIcon onClick={toggle}>
                     <FaBars />

                </MobileIcon>  
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">E-book</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Serviços</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Time</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="deal">Contrate</NavBtnLink>
                </NavBtn>
                
            </NavbarContainer>
         </Nav>   
       </> 
    )
}

export default Navbar
