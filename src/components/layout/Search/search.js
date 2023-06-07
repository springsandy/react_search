import React, {useState} from 'react';
import './search.css';

const Search = (event) => {
  const [searchText, setSearchText] = useState()
  
  const search_button = () => {
    console.log('aaa')
    console.log(searchText)
  }

  return (
    <div className="search">
      <input type="text" value={searchText} placeholder="검색어 입력" />
      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" onClick={search_button} />
    </div>
  );
}

export default Search;