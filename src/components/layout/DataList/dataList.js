import React from "react";
import './dataList.css';

const DataList = ({dataList}) => {
  const dataItems = dataList.items
  // console.log(dataItems)

  return (
    <div class="dataList">
      <br/>
      {
        dataItems.map(function(dataItem) {
          return (
            <RowList thumbnail={dataItem.thumbnail} title={dataItem.title} description={dataItem.description} link={dataItem.link} />
          )
        })
      }
    </div>
  )
}

const RowList = ({thumbnail, title, description, link}) => {
  const newTitle = title.replace(/(<([^>]+)>)/ig, "");
  const newDescription = description.replace(/(<([^>]+)>)/ig, "");

  return (
    <div class="rowList">
      <b>{newTitle}</b>
      <h6>{newDescription}</h6>
      <a href={link} target='_blank'>{link}</a>
      <hr/>
    </div>
  )
}

export default DataList;