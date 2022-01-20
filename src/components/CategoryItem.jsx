import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 7px;
  height: 50vh;
  position: relative;
  align-items: center;
  justify-content: center
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 75%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: bottom;
`;

const Title = styled.h1`
    color:#0080ff;
    font-size:30px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: #fcf5f5;
    color:gray;
    cursor: pointer;
    font-weight: 1000;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <a href="/productlist"><Button>SHOP NOW</Button></a>
      </Info>
    </Container>
  );
};

export default CategoryItem;
