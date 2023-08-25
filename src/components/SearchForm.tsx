import React from 'react';
import {SearchedBooks} from "./SearchedBooks";
import {
    StyledEachSelectAndLabel,
    StyledExtraInfoOfForm, StyledFormContainer,
    StyledFrom,
    StyledHeaderTextOfForm,
    StyledInput, StyledLabel,
    StyledSearchInput, StyledSelect
} from "../styles/components/SearchForm,styles";
import {AiOutlineSearch} from "react-icons/ai";
import useSearchForm from "./useSearchForm";

export const SearchForm = () => {
    const {query,handleQueryChange,handleKeyPress,category,handleCategoryChange,sortingBy,handleSortingByChange,loadMore,getBooks} = useSearchForm();
    return (
        <>
            <StyledFormContainer>
                <StyledFrom>
                    <StyledHeaderTextOfForm>
                        Search For Books
                    </StyledHeaderTextOfForm>
                    <StyledSearchInput>
                        <StyledInput value={query} onChange={handleQueryChange} onKeyPress={handleKeyPress}
                                     placeholder={"Please enter any info about the book!"}/>
                        <AiOutlineSearch style={{cursor: "pointer"}} onClick={getBooks}/>
                    </StyledSearchInput>
                    <StyledExtraInfoOfForm>
                        <StyledEachSelectAndLabel>
                            <StyledLabel htmlFor="category">
                                Categories:
                            </StyledLabel>
                            <StyledSelect value={category} onChange={handleCategoryChange} name="category"
                                          id="category">
                                <option value="all">All</option>
                                <option value="art">Art</option>
                                <option value="biography">Biography</option>
                                <option value="computers">Computers</option>
                                <option value="history">History</option>
                                <option value="medical">Medical</option>
                                <option value="poetry">Poetry</option>
                            </StyledSelect>
                        </StyledEachSelectAndLabel>
                        <StyledEachSelectAndLabel>
                            <StyledLabel htmlFor="sorting_by">
                                Sorting By:
                            </StyledLabel>
                            <StyledSelect value={sortingBy} onChange={handleSortingByChange} name="sorting_by"
                                          id="sorting_by">
                                <option value="relevance">Relevance</option>
                                <option value="newest">Newest</option>
                            </StyledSelect>
                        </StyledEachSelectAndLabel>
                    </StyledExtraInfoOfForm>
                </StyledFrom>
            </StyledFormContainer>
            <SearchedBooks loadMore={loadMore}/>
        </>
    );
};