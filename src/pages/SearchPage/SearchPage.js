import React, { useEffect, useState } from "react";
import "./SearchPage.css";

function SearchPage({ history }) {
  const [propertyList, setPropertyList] = useState([]);
  const [filterPropertyList, setFilterPropertyList] = useState([]);
  const [searchData, setSearchData] = useState({});

  // useEffect to fetch the top 50 data
  useEffect(() => {
    fetch("https://strapidemo.q.starberry.com/properties?_limit=50")
      .then((resp) => resp.json())
      .then((respData) => {
        setPropertyList([...respData]);
        setFilterPropertyList([...respData]);
      });
  }, []);

  // onChange function to update the filter datas
  const onChangeHandler = (event) => {
    setSearchData({
      ...searchData,
      [event.target.name]: event.target.value,
    });
  };

  // useEffect to filter the data based on the search data filter
  useEffect(() => {
    const filteredList = propertyList.filter((propertyObj) => {
      if (propertyObj?.bedroom === Number(searchData?.bedroom)) return true;
      return false;
    });
    setFilterPropertyList([...filteredList]);
  }, [searchData]);

  const onPropertyClick = (obj) => {
    history.push({
      pathname: "/detailPage",
      state: {
        propertyData: JSON.stringify(obj),
      },
    });
  };

  return (
    <div className="container">
      <h3 className="text_center">Property for Sales</h3>
      <div className="searchContainer">
        <div className="bedrooms">
          <select
            className="dropdown"
            name="bedroom"
            id="bedroom"
            value={searchData?.bedroom}
            onChange={onChangeHandler}
          >
            <option value="-1"> All Bedrooms</option>
            <option value="1"> 1 Bedroom</option>
            <option value="2"> 2 Bedroom</option>
            <option value="3"> 3 Bedroom</option>
            <option value="4"> 4 Bedroom</option>
          </select>
        </div>
        <div className="sortBy">
          <select
            className="dropdown"
            name="sortBy"
            id="sortBy"
            value={searchData?.sortBy}
            onChange={onChangeHandler}
          >
            <option value="null">Sort by</option>
            <option value="Price">Price</option>
            <option value="Bedroom">Bedroom</option>
          </select>
        </div>
      </div>
      <div className="propertyContainer">
        {filterPropertyList.map((propertyObj, index) => {
          return (
            <div
              className="property"
              key={`${propertyObj?.title}_${index + 1}`}
              onClick={() => onPropertyClick(propertyObj)}
            >
              <img
                className="thumbnailImg"
                src={propertyObj?.thumbnail}
                alt="thumbnail_img"
              />
              <div className="displayAddress">
                {propertyObj?.display_address}
              </div>
              <div className="propertyTitle">{propertyObj?.title}</div>
              <div className="propertyPrice">
                <b>{propertyObj?.price} &#8364;</b>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
