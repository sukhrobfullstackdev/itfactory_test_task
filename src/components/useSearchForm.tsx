import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GET_BOOKS, LOAD_MORE} from "../redux/types";
import {IParams} from "../typings";

const UseSearchForm = () => {
    const dispatch = useDispatch();
    const books = useSelector((state: any) => state.books.data);
    const [query, setQuery] = useState<string>("");
    const [category, setCategory] = useState<string>("all");
    const [sortingBy, setSortingBy] = useState<string>("relevance");
    useEffect(()=>{
        getBooks();
    },[sortingBy,category]);
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>):void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            getBooks();
        }
    }
    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        e.preventDefault();
        setQuery(e.target.value);
    }
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
        e.preventDefault();
        setCategory(e.target.value);
    }
    const handleSortingByChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
        e.preventDefault();
        setSortingBy(e.target.value);
    }
    const loadMore = () => {
        const data:IParams = {q: query.split(' ').join('+'), category, sortingBy, startIndex: books.length, maxResults: 30};
        if (query.length > 0) {
            dispatch({type: LOAD_MORE, data});
        }
    }
    const getBooks = ():void => {
        const data:IParams = {q: query.split(' ').join('+'), category, sortingBy};
        if (query.length > 0) {
            dispatch({type: GET_BOOKS, data});
        }
    }
    return {query,handleQueryChange,handleKeyPress,category,handleCategoryChange,sortingBy,handleSortingByChange,loadMore,getBooks};
};

export default UseSearchForm;