import React from 'react';
import {BookCard} from "./BookCard";
import {useSelector} from "react-redux";
import {
    StyledBooks,
    StyledBooksContainer,
    StyledBooksCount, StyledButton,
    StyledCirclesLoader, StyledLine, StyledLoadMoreButton
} from "../styles/components/SearchedBooks.styles";
import {Alert, Space, Spin} from 'antd';
import {IBook} from "../typings";

export const SearchedBooks = ({loadMore}: { loadMore: () => void }) => {
    const books = useSelector((state: any) => state.books.data);
    const totalItems = useSelector((state: any) => state.books.totalItems);
    const loading = useSelector((state: any) => state.books.loading);
    const error = useSelector((state: any) => state.books.error);
    if (loading) {
        return (
            <StyledCirclesLoader>
                <Spin size="large"/>
            </StyledCirclesLoader>
        )
    }
    if (error.message) {
        return (
            <Space direction="vertical"
                   style={{width: '50%', zIndex: '999', position: "absolute", top: '10px', right: 0}}>
                <Alert message={error.message} type="error" showIcon closable/>
            </Space>
        )
    }

    return (
        <StyledBooksContainer>
            <StyledBooksCount>Found {totalItems} results</StyledBooksCount>
            <StyledBooks>
                {books?.map((item: IBook) => <BookCard key={item.id} book={item}/>)}
            </StyledBooks>
            <StyledLoadMoreButton>
                <StyledLine/>
                <StyledButton disabled={!(books?.length > 0)} onClick={loadMore}>Load More</StyledButton>
                <StyledLine/>
            </StyledLoadMoreButton>
        </StyledBooksContainer>
    );

};