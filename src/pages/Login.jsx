import styled from "styled-components";
import {mobile} from "../responsive";
import { useAuth } from "../context/AuthContext";
import { useState, useRef } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LinkA = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const dispatch = useDispatch();
  async function handleSubmit(e)
  {
    e.preventDefault()
    try 
    {
      setError('');
      setLoading(true);
      var response = await login(emailRef.current.value, passwordRef.current.value);
      console.log(response);
      // history("/");
    }
    catch(error)
    {
      console.log(error); 
      setError("Failed to login");
    }
    setLoading(false);
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="username" ref ={emailRef} />
          <Input placeholder="password" type={"password"}  ref = {passwordRef} />
          <Button>LOGIN</Button>
          <LinkA>Forgot Password?</LinkA>
          <LinkA>CREATE A NEW ACCOUNT</LinkA>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
