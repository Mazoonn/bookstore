import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import Login from '../../Components/Login/Login';
import {ABOUT_US, BASE, REGISTER} from "../../consts/routes";
import Button from "../../Components/Button";
import {useBusinessLogic} from "../../hooks";
const Header = () => {
  const {isLoggedIn} = useBusinessLogic()
  const [showLogin, setShowLogin] = useState(isLoggedIn);

  return (
    <Wrapper>
      <h1>BOOK CATALOG</h1>
      <Bar>
        {isLoggedIn &&<Tab title="Home" redirectLink={BASE} />}
        {!isLoggedIn &&<Tab title="Register" redirectLink={REGISTER}/>}
        <Tab title="About Us" redirectLink={ABOUT_US} />
      </Bar>
        {!isLoggedIn && <LoginBar>
            <Button onClick={()=>setShowLogin(!showLogin)}>Login</Button>
            <Login show={showLogin} handleClose={()=>setShowLogin(!showLogin)}/>
        </LoginBar>}
    </Wrapper>
  );
};

export default Header;

const LoginBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 44px;
  padding-left: 44px;
  height: 80px;
  background-color: #66661a1a;
  z-index: 50;
`;
