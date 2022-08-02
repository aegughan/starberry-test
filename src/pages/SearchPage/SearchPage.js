import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./SearchPage.css";

function SearchPage({ history }) {
  const [propertyList, setPropertyList] = useState([]);
  const [filterPropertyList, setFilterPropertyList] = useState([]);
  const [isLoading, showLoading] = useState(false);
  const [searchData, setSearchData] = useState({
    bedroom: "-1",
    sortBy: "null",
  });

  // useEffect to fetch the top 50 property data
  useEffect(() => {
    showLoading(true);
    fetch("https://strapidemo.q.starberry.com/properties?_limit=50")
      .then((resp) => resp.json())
      .then((respData) => {
        setPropertyList([...respData]);
        setFilterPropertyList([...respData]);
      })
      .finally(() => {
        showLoading(false);
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
    let filteredList = [];
    if (searchData?.bedroom === "-1") {
      filteredList = [...propertyList];
    } else {
      filteredList = propertyList.filter((propertyObj) => {
        if (propertyObj?.bedroom === Number(searchData?.bedroom)) return true;
        return false;
      });
    }
    if (searchData?.sortBy === "MinPrice") {
      filteredList.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    if (searchData?.sortBy === "MaxPrice") {
      filteredList.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    setFilterPropertyList([...filteredList]);
  }, [searchData]);

  // Function to open the detail view of the property
  const onPropertyClick = (obj) => {
    history.push({
      pathname: "/detailPage",
      state: {
        propertyData: JSON.stringify(obj),
      },
    });
  };

  return (
    <>
      <Header history={history} />
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
              <option value="2"> 2 Bedrooms</option>
              <option value="3"> 3 Bedrooms</option>
              <option value="4"> 4 Bedrooms</option>
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
              <option value="MaxPrice">Max Price</option>
              <option value="MinPrice">Min Price</option>
            </select>
          </div>
          <div className="right">{filterPropertyList?.length} results</div>
        </div>
        <div className="propertyContainer">
          {isLoading && <div>Loading...</div>}
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
      <Footer />
    </>
  );
}

export default SearchPage;
