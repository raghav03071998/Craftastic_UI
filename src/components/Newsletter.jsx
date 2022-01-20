import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 45vh;
  background-color: #fcf5f5;
  display:flex;
  flex-direction:row;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  padding-left:40px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
`;

const Right = styled.div`
  padding-left:10rem;
  display: flex;
  align-items:right;
  justify-content: center ;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const Newsletter = () => {
  return (
    <Container>
      <Left>
      <Title>Are you Craftastic?</Title>
      <Desc>Sell to millions of customers on Craftastic, all across the globe!</Desc>
      <Desc>All you need to sell on Craftastic is</Desc>    
      </Left>

      <Right>
        <Title>Why sell at Craftastic? </Title>
        <Desc>Sell to millions of customers on Craftastic, all across the globe!</Desc>
        <Desc>All you need to sell on Craftastic is</Desc>
      </Right>
    </Container>
  );
};

export default Newsletter;
