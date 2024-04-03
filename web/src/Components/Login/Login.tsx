import { Form, Field } from 'react-final-form';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';
import {useLazyLoginUserQuery} from "../../store/api-slice";
import {setIsLoggedInState} from "../../store/business-logic-slice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {BASE} from "../../consts/routes";
const required = (value:any) => (value || '' ? undefined : 'Required');

const Login = ({ show, handleClose }:any) => {
  const [trigger, { isUninitialized, data, error, isLoading }] = useLazyLoginUserQuery();
  const dispatch = useDispatch()

  useEffect(()=>{
    if(data){
      dispatch(setIsLoggedInState(true))
    }
  },[data])


  const onSubmit = async (values:any) => {
    trigger(values)
  };

  const formData = {
    email: '',
    password: ''
  };


  return (
    <Wrapper>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          ...formData
        }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h1>Login</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <InputDiv>
                  <Field name="email" component="input" type="email" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor="email">
                          <span>Email</span>
                          {meta.error && meta.touched && (
                            <span style={{ color: 'red' }}> - {meta.error}</span>
                          )}
                          <br />
                          <input {...input} id="email" placeholder="asd@asd.asd" />
                        </label>
                      </div>
                    )}
                  </Field>
                </InputDiv>
                <InputDiv>
                  <Field name="password" component="input" type="password" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <label htmlFor="password">
                          Password
                          {meta.error && meta.touched && (
                            <span style={{ color: 'red' }}> - {meta.error}</span>
                          )}
                          <br />
                          <input {...input} id="password" placeholder="********************" />
                        </label>
                      </div>
                    )}
                  </Field>
                </InputDiv>
                <Wrapper>
                  <Button type="submit" disabled={submitting || pristine}>
                    Login
                  </Button>
                </Wrapper>
              </form>
            </Modal.Body>
          </Modal>
        )}
      />
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  margin: auto;
  padding: 5px;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  right:40px;
  position: absolute;
  text-align: center;
  display: inline-block;
`;

const InputDiv = styled.div`
  text-align: center;
  padding: 15px;
`;
