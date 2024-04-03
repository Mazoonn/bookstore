import { Form, Field } from 'react-final-form';
import React from 'react';
import styled from 'styled-components';
import {Modal, Button, Row, Col} from 'react-bootstrap';
import {useLazyAddBookQuery} from "../../store/api-slice";
import {Book} from "../../consts/Book";
const required = (value:any) => (value || '' ? undefined : 'Required');

const AddBookPopUp = ({ show, handleClose }:any) => {
  const [trigger, { isUninitialized, data, error, isLoading }] = useLazyAddBookQuery();

  let formData = {
    author: '',
    description: '',
    price: '',
    genre: 1,
    publicationDate: '',
    title: '',
  } as Book;


  const onSubmit = async (values:any) => {
    const publicationDate = new Date(values.publicationDate)
    trigger({...values, publicationDate})
    formData = {
      author: '',
      description: '',
      price: '',
      genre: 1,
      publicationDate: '',
      title: '',
    }
    handleClose()
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
                <h3>Add Book To Book Catalog</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <InputDiv>
                  <Field name="author" component="input" type="text" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <StyledLabel htmlFor="author">
                          <span>author</span>
                          {meta.error && meta.touched && (
                            <span style={{ color: 'red' }}> - {meta.error}</span>
                          )}
                          <br />
                          <StyledInput {...input} id="author" placeholder="author" />
                        </StyledLabel>
                      </div>
                    )}
                  </Field>
                </InputDiv>
                <InputDiv>
                  <Field name="description" component="input" type="text" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <StyledLabel htmlFor="description">
                          Description
                          {meta.error && meta.touched && (
                            <span style={{ color: 'red' }}> - {meta.error}</span>
                          )}
                          <br />
                          <StyledInput {...input} id="description" placeholder="description" />
                        </StyledLabel>
                      </div>
                    )}
                  </Field>
                </InputDiv>
                <InputDiv>
                  <Field name="publicationDate"  component="input" type="date" validate={required}>
                    {({ input, meta }) => (
                        <div>
                          <StyledLabel htmlFor="publicationDate">
                            Date Published
                            {meta.error && meta.touched && (
                                <span style={{ color: 'red' }}> - {meta.error}</span>
                            )}
                            <br />
                            <StyledInput {...input} id="publicationDate" placeholder="" />
                          </StyledLabel>
                        </div>
                    )}
                  </Field>
                </InputDiv>
                <InputDiv>
                  <Field name="title" component="input" type="text" validate={required}>
                    {({ input, meta }) => (
                        <div>
                          <StyledLabel htmlFor="title">
                            Title
                            {meta.error && meta.touched && (
                                <span style={{ color: 'red' }}> - {meta.error}</span>
                            )}
                            <br />
                            <StyledInput {...input} id="title" placeholder="title" />
                          </StyledLabel>
                        </div>
                    )}
                  </Field>
                </InputDiv>
                <InputDiv>
                  <Field name="price" component="input" type="number" validate={required}>
                    {({ input, meta }) => (
                        <div>
                          <StyledLabel htmlFor="price">
                            Price
                            {meta.error && meta.touched && (
                                <span style={{ color: 'red' }}> - {meta.error}</span>
                            )}
                            <br />
                            <StyledInput {...input} id="price" placeholder="price" />
                          </StyledLabel>
                        </div>
                    )}
                  </Field>
                </InputDiv>
                <InputDiv>
                  <StyledLabel htmlFor="genre">
                      Genre
                    <StyledField name="genre" component="select" >
                      <option value="1"> Science Fiction</option>
                      <option value="2"> Satire</option>
                      <option value="3"> Drama</option>
                      <option value="3"> Mystery</option>
                    </StyledField>
                  </StyledLabel>
                </InputDiv>
                <Wrapper>
                  <Row>
                  <Col>
                    <Button type="submit" disabled={submitting || pristine}>
                      Add
                    </Button>
                    </Col>
                    <Col>
                    <Button type="button" onClick={form.reset} disabled={submitting || pristine}>
                      Reset
                    </Button>
                  </Col>
                  </Row>
                </Wrapper>
              </form>
            </Modal.Body>
          </Modal>
        )}
      />
    </Wrapper>
  );
};

export default AddBookPopUp;

const Wrapper = styled.div`
  margin: auto;
  padding: 5px;
  text-align: center;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledField = styled(Field)`
  width: 100%;
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
