import React from 'react';
import { useLocation } from 'react-router-dom';
type Props = {};

const Search = (props: Props) => {
  const { state } = useLocation();
  console.log(state);

  return <div>Search</div>;
};

export default Search;
