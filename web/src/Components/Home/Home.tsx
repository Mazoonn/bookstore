/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useBookApi} from "../../hooks";
import CardBook from "../Books/CardBook";
import {Book} from "../../consts/Book";
import {Col, Row, Button} from "react-bootstrap";
import AddBookPopUp from "../Books/AddBookPopUp";

const Home = () => {
    const {data,isLoading} = useBookApi()
    const [books , SetBooks] : [Book[],any] = useState([])
    const [addBookPopUp, setAddBookPopUp] = useState(false);

    useEffect(() => {
        if (data){
            SetBooks(data)
        }
    }, [data]);

    const cardsBooks = () => {
        if (!books.length){
            return 'There are no books'
        }
        return  books.map((book:any)=> <CardBook data={book}/>)
    }

    return (
        <Wrapper>
            <StyledRow>
                <Col>
                    <Button className="btn btn-success" onClick={()=>setAddBookPopUp(!addBookPopUp)}>Add</Button>
                    <AddBookPopUp show={addBookPopUp} handleClose={setAddBookPopUp}/>
                </Col>
               </StyledRow>
            <StyledRow>
                {cardsBooks()}
            </StyledRow>
        </Wrapper>
    );
};

export default Home;

const StyledRow = styled(Row)`
margin: 10px;
gap: 40px;
justify-content: center
`

const Wrapper = styled.div`
  background: #fff;
  box-shadow: 0px 14px 34px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
    width: 100%;
    height: 100%;
  margin: 40px;
  margin-top: 60px;
  margin-right: 16px;

  div {
    padding: 10px;
  }

  button {
    margin: 10px;
  }
`;
