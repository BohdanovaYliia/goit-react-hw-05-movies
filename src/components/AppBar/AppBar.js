import { Nav, NavList, NavListItem, NavItem } from "./AppBar.styled";

export const AppBar = () => {
    return <Nav>
        <NavList>
            <NavListItem>
                <NavItem to='/' end>Home</NavItem>
            </NavListItem>
            <NavListItem>
                <NavItem to='movies'>Movies</NavItem>
            </NavListItem>
        </NavList>
    </Nav>
}