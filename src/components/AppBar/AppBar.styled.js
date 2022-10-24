import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    align-items: center;

    width: 100%;
    height: 50px;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.3);
`;

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
`;

export const NavListItem = styled.li`
    margin-right: 20px;
`;

export const NavItem = styled(NavLink)`
    border-radius: 10px;
    padding: 4px 10px;
    text-decoration: none;
    font-size: 16px;
    color: darkblue;
    
    &.active {
        background-color: lightblue; 
        
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: blue;
    }
`;

