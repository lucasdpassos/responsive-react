import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen })=> (isOpen ? '0' : '-100%')}; 
    
` // Sc Closure

export const CloseIcon = styled(FaTimes)`
    color: #fff;

` //Sc Closure

export const Icon = styled.div`
    position: absloute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

` // sc Closure

export const SidebarWrapper = styled.div`
    color: #fff;
` // sc closure

export const SidebarLink = styled(LinkS)`
    display; flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;

    }
` // sc closure

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`// sc closure

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71
`// sc closure