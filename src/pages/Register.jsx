import styled from "styled-components";
import { mobile } from "../responsive";
import {React, useRef, useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import {Alert } from 'react-bootstrap'

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
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error,setError] = useState('')
  const {signup} = useAuth()
  const [loading,setLoading] = useState(false)
  async function handleSubmit(e)
  {
        e.preventDefault()
        setLoading(true);
        console.log(passwordRef.current.value, passwordConfirmRef.current.value)
        if(passwordRef.current.value!==passwordConfirmRef.current.value)
        {
            console.log('not');
            setLoading(false);
            return setError('Passwords do not match');
        }
        try{
            setError('')
            setLoading(false);
            console.log(emailRef.current.value,passwordConfirmRef.current.value)
            await signup(emailRef.current.value,passwordRef.current.value)
        }   
        catch(error){
            setLoading(false);
            console.log(error)
            setError('Failed to create the acount')
        }   
        setLoading(false);
    }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {error && <Alert variant = "danger">{error}</Alert>}
        <Form  onSubmit={handleSubmit}>
          <Input placeholder="name"  />
          <Input placeholder="last name"   />
          <Input placeholder="username" />
          <Input placeholder="email" ref = {emailRef}/>
          <Input placeholder="password" ref = {passwordRef}/>
          <Input placeholder="confirm password" ref = {passwordConfirmRef} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button disabled = {loading} type = "submit"  id = "signup">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
