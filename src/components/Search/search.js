import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filter/filter-slice";
import { selectFilter } from "../../redux/selectors";
import { SearchName, SearchInput, SearhField } from "./search.styled";

export const Search = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = (e) => {
    const searchObject = e.target.value.toLowerCase().trim();
    dispatch(setFilter(searchObject));
  };

  return (
    <SearhField>
      <SearchName>
        Find contacts by name
        <SearchInput value={filter} onChange={changeFilter}></SearchInput>
      </SearchName>
    </SearhField>
  );
};
