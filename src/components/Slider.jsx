import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 2;
`;

const Image = styled.img`
  height: 90%;
  padding-top:3%;
  padding-left:3%;
  padding-right:3%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  margin-left:5%;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Button = styled.button`
  margin-top:20%;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {

  return (
    <Container>
      <Wrapper>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>Buy or sell hand-crafted items at one place</Title>
              <a href="/signup"><Button>Get Started</Button></a>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Slider;
