import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  background-color:teal;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  background-color : white;
  display: flex;
  flex:5;
  align-items: right;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>CRAFTASTIC</Logo>
        <SearchContainer>
            <Input placeholder="Search" />
            {/* <Search style={{ color: "gray", fontSize: 16},{alignItems:'right',display: 'flex'},{width:"50px;"}} /> */}
          </SearchContainer> 
        </Left>
        <Right>
          <MenuItem></MenuItem>
          {/* <MenuItem><FavoriteBorder></FavoriteBorder></MenuItem> */}
          <MenuItem>
              {/* <ShoppingCartOutlined /> */}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
