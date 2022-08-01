import React from "react";
import "./DetailPage.css";

function DetailPage({ location }) {
  const propertyData = JSON.parse(location?.state?.propertyData ?? "");
  console.log("propertyData", propertyData, propertyData?.images[0]);
  return (
    <div className="detailContainer">
      <div className="imageContainer">
        <img
          src={propertyData?.images[0]?.srcUrl}
          alt={propertyData?.images[0]?.Caption}
        />
        <div className="innerImg">
          <img
            src={propertyData?.images[1]?.srcUrl}
            alt={propertyData?.images[1]?.Caption}
          />
          <img
            src={propertyData?.images[2]?.srcUrl}
            alt={propertyData?.images[2]?.Caption}
          />
        </div>
      </div>
      <div className="propertyContainer">
        <div className="right">
          <span>Share</span>
        </div>
        <hr />
        <div className="priceDetails">
          <span>
            <b>{propertyData?.price} &#8364; &nbsp;</b>
          </span>
          <span>{propertyData?.bedroom} bed</span> | <span>58 sqm</span>
        </div>
        <div>{propertyData?.slug}</div>
        <div>Please contact us</div>
        <div>
          <button> Contact Agent</button>
        </div>
        <div>Facts & Features</div>
        <hr />
        <div>
          <div>
            <div>Neighbourhood:</div>
            <div>Neighbourhood:</div>
          </div>
          <div>
            <div>Price per sqm:</div>
            <div>Neighbourhood:</div>
          </div>
          <div>
            <div>Brochure:</div>
            <div>Neighbourhood:</div>
          </div>
          <div>
            <div>Floor Plan:</div>
            <div>Neighbourhood:</div>
          </div>
        </div>
        <div className="accomadation_summary">{propertyData['accomadation_summary']}</div>
      </div>
    </div>
  );
}

export default DetailPage;
