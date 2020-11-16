import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} oncLick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" oncLick={toggle} >
                        Sobre
                    </SidebarLink>
                    <SidebarLink to="discover" oncLick={toggle}>
                        Portfólio
                    </SidebarLink>
                    <SidebarLink to="services" oncLick={toggle}>
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="contact" oncLick={toggle}>
                        Contato
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='deal'>Contrate</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
