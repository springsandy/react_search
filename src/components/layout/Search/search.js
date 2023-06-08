import React, { useState } from 'react';
import './search.css';
import axios from 'axios';
import DataList from '../DataList/dataList';

const Search = () => {
  const [dataList, setDataList] = useState()
  const search_button = () => {
    var searchText = document.getElementById("searchText").value;
    var client_id = 'IB7DxzurUvjMgJGnx9FG';
    var client_secret = 'XJ5PWY1j8u';

    axios.get('https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/encyc.json?query='+encodeURI(searchText), {
      headers: {
        'X-Naver-Client-Id':client_id, 
        'X-Naver-Client-Secret': client_secret
      }
    })
    .then((res) => {
      setDataList(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  if (dataList != null) {
    return (
      <div>
        <div className="search">
          <input id="searchText" type="text" placeholder="검색어 입력" />
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" onClick={search_button} />
        </div>

        <DataList dataList={dataList} />
      </div>
    )
  }

  return (
    <div className="search">
      <input id="searchText" type="text" placeholder="검색어 입력" />
      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" onClick={search_button} />
    </div>
  );
}

export default Search;