import styled from "styled-components";
import { mobile } from "../responsive";
import  React ,{ useRef }from "react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  height:20%;
  margin-top:5%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  
  async function handleSubmit(e)
  {
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value)
    {
      return "Passwords do not match!"

    }
    try 
    {
      setError('');
      setLoading(true);
      console.log(passwordRef.current.value);
      var response = await signup(emailRef.current.value, passwordRef.current.value);
      console.log(response);
    }
    catch(error)
    {
      console.log(error); 
        setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {/* {error && <Alert variant = "danger"></Alert>} */}
        <Form onSubmit={handleSubmit}>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" ref ={emailRef} />
          <Input placeholder="password" ref = {passwordRef} type ={"password"} />
          <Input placeholder="confirm password" ref = {passwordConfirmRef} type ={"password"} />
          <Button disabled = {loading}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
