/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Card, Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import Button from '../Button';
import {useLazyCreateUserQuery} from "../../store/api-slice";
import {useNavigate} from "react-router-dom";
import {BASE} from "../../consts/routes";

const required = (value:any) => (value || '' ? undefined : 'Required');

const Register = () => {
  const [trigger, { isUninitialized, data, error, isLoading }] = useLazyCreateUserQuery();
  const navigate = useNavigate();

  const onSubmit = async (values:any) => {
    trigger(values)
    navigate(BASE)
  };

  const formData = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  };

  return (
    <Wrapper>
      <Card>
        <Card.Body>
          <Container>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                ...formData
              }}
              render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      First Name
                      <br />
                      <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                        validate={required}
                      >
                        {({ input, meta }) => (
                            <>
                              <input {...input}/>
                              {meta.error && meta.touched && (
                                  <span style={{ color: 'red' }}>{meta.error}</span>
                              )}
                            </>
                        )}
                      </Field>
                    </Col>
                    <Col>
                      Last Name
                      <br />
                      <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                        validate={required}
                      >
                        {({ input, meta }) => (
                            <>
                              <input {...input}/>
                              {meta.error && meta.touched && (
                                  <span style={{ color: 'red' }}>{meta.error}</span>
                              )}
                            </>
                        )}
                      </Field>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      Passowrd
                      <br />
                      <Field
                        name="password"
                        component="input"
                        type="password"
                        placeholder="**********"
                        validate={required}
                      >
                        {({ input, meta }) => (
                            <>
                              <input {...input}/>
                              {meta.error && meta.touched && (
                                  <span style={{ color: 'red' }}>{meta.error}</span>
                              )}
                            </>
                        )}
                      </Field>
                    </Col>
                    <Col>
                      email
                      <br />
                      <Field
                          name="email"
                          component="input"
                          type="email"
                          placeholder="example@gmail.com"
                          validate={required}
                      >
                        {({ input, meta }) => (
                            <>
                              <input {...input}/>
                              {meta.error && meta.touched && (
                                  <span style={{ color: 'red' }}>{meta.error}</span>
                              )}
                            </>
                        )}
                      </Field>
                    </Col>
                  </Row>
                    <Col style={{ textAlign: 'center' }}>
                      <Button type="submit" disabled={submitting || pristine}>
                        Submit
                      </Button>
                      <Button type="button" onClick={form.reset} disabled={submitting || pristine}>
                        Reset
                      </Button>
                    </Col>
                </form>
              )}
            />
          </Container>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  background: #fff;
  box-shadow: 0px 14px 34px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  width: fit-content;
  height: fit-content;
  margin-top: 50px;
  margin-right: 16px;
  width: 450px;

  div {
    padding: 10px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
  }
  input{
    width: 150px;
  }
  select{
    width: 150px;
  }

  button {
    margin: 10px;
  }
`;
