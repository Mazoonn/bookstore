/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState} from 'react';
import styled from 'styled-components';
import {Card, CardBody, CardHeader, CardText, CardTitle, Col, Row, Button as BootStrapButton} from "react-bootstrap";
import {Book} from "../../consts/Book";
import Button from "../Button";
import { useLazyDeleteBookQuery} from "../../store/api-slice";
import {useNavigate} from "react-router-dom";
import BookPopUp from "./BookPopUp";

type CardBookProps = {
    data: Book;
    showDataOnly?: boolean;
}

const CardBook = ({data , showDataOnly  }: CardBookProps): React.JSX.Element => {
    const [showBookPopUp, setShowBookPopUp] = useState(false);
    const [book , setBook] =  useState(data)
    const [trigger, { isUninitialized, data:response, error, isLoading }] = useLazyDeleteBookQuery();
    const navigate = useNavigate();
    const [wasDeleted, setWasDeleted] = useState(false)
    const getDate = (date:string) => {
        const year = new Date(date).getFullYear();
        const month =  new Date(date).getMonth();
        const day = new Date(date).getDay();
        return  `${day}/${month}/${year}`
    }
    const deleteBook = (id:number) => {
        trigger({id})
        navigate(window.location.pathname, { replace: true });
        setWasDeleted(true)
    }
    const seeDetails = () => {
        setShowBookPopUp(!showBookPopUp)
    }
    if (wasDeleted){
        return <></>
    }

    return (
      <CardWrapper>
          <CardHeader >
              {!showDataOnly &&<Row>
                  <Col>
                      <BootStrapButton className="btn btn-danger"
                                       onClick={() => deleteBook(book?.id as number)}>Delete</BootStrapButton>
                      <Button onClick={() => seeDetails()}> See Details </Button>
                      <BookPopUp book={book}  show={showBookPopUp} handleClose={()=>setShowBookPopUp(!showBookPopUp)}/>
                  </Col>
              </Row>}
              <Row><img width={200} height={200} src='/images/book.jpg'/></Row>
          </CardHeader>
          <CardBody>
          <CardTitle>
                  {book?.title}
              </CardTitle>
              <CardText>
                  <span>Description: {book?.description}</span><br/>
                  <span>Price: {book?.price}</span><br/>
                  <span>Genre: <b>{(book?.genre as {name:string})?.name}</b></span><br/>
                  <span>Publication Date: {getDate(book?.publicationDate)}</span><br/>
              </CardText>
          </CardBody>
      </CardWrapper>
    );
};

export default CardBook;

const CardWrapper = styled(Card)`
  width: 300px;
  height: 600px;
`;
