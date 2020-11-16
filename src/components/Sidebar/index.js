import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        Sobre
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Portfólio
                    </SidebarLink>
                    <SidebarLink to="services">
                        Serviços
                    </SidebarLink>
                    <SidebarLink to="contact">
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
