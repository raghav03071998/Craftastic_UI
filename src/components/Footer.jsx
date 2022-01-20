import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color:grey;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 28px;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size:25px;       
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>About Us</Title>
      </Left>
      <Left>
        <Title>Contact Us</Title>
      </Left>
      <Left>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="3B6888">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
    </Container>
  );
};

export default Footer;
