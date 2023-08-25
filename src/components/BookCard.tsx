import React from 'react';
import {StyledBookCard, StyledImageOfBook, StyledBookCategory,StyledTitleOfBook,StyledAuthorsOfBook} from "../styles/components/BookCard.styles";
import {IBook} from "../typings";

export const BookCard = ({book}: { book: IBook }) => {
    console.log(book);
    const authorsArray = book.volumeInfo?.authors;
    const categoriesArray = book.volumeInfo?.categories;
    const authorsString = authorsArray?.join(', ');
    const categoriesString = categoriesArray?.join(', ');
    return (
        <StyledBookCard>
            <StyledImageOfBook src={book.volumeInfo?.imageLinks?.thumbnail}/>
            <StyledBookCategory>{categoriesString}</StyledBookCategory>
            <StyledTitleOfBook>{book.volumeInfo?.title}</StyledTitleOfBook>
            <StyledAuthorsOfBook>{authorsString}</StyledAuthorsOfBook>
        </StyledBookCard>
    );
};