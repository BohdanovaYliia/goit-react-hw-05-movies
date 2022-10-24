import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 10px;
`;

export const ListItem = styled.li`
`;

export const ListItemLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 300px;
  margin-top: 5px;
  border: 1px grey solid;
  padding: 5px;
  color: black;

  :hover,
  :focus {
    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.3);
  }
`;