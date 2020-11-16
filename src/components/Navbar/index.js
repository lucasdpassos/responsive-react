import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
       <>
         <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Grip
                 <MobileIcon>
                     <FaBars />

                </MobileIcon>  
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Portfólio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Serviços</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contato</NavLinks>
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
