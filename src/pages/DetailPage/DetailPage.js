import React from "react";
import "./DetailPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function DetailPage({ history, location }) {
  // Property data value will be passed while click on the each property through history.push
  const propertyData = JSON.parse(location?.state?.propertyData ?? "");
  return (
    <>
      <Header history={history} />
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
          <div className="right icons">
            <span className="shareIcon">
              <FontAwesomeIcon icon={faShareNodes} />
            </span>
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>
          <hr />
          <div className="priceDetails mb_10">
            <span>
              <b> &#8364; {propertyData?.price} &nbsp;</b>
            </span>
            <span>{propertyData?.bedroom} bed</span> | <span>58 sqm</span>
          </div>
          <div className="mb_10">{propertyData?.slug}</div>
          <div className="mb_10 contactUs">
            <FontAwesomeIcon size="xs" className="homeIcon" icon={faHome} />
            Please contact us
          </div>
          <div className="mb_10">
            <button className="contactAgent"> Contact Agent</button>
          </div>
          <div>FACTS & FEATURES</div>
          <hr />
          <div className="features">
            <div className="flexLayout">
              <div>
                <b>Neighbourhood:</b>
              </div>
              <div>{propertyData?.display_address}</div>
            </div>
            <div className="flexLayout">
              <div>
                <b>Price per sqm:</b>
              </div>
              <div>&#8364; 37,931</div>
            </div>
            <div className="flexLayout">
              <div>
                <b>Brochure:</b>
              </div>
              <div>
                <a
                  href={`${propertyData?.selling_info?.publicBrochureUrl}`}
                  download={`${propertyData?.selling_info?.brochureId}`}
                >
                  Download Brochure
                </a>
              </div>
            </div>
            <div className="flexLayout">
              <div>
                <b>Floor Plan:</b>
              </div>
              <div>
                <a href="">View Floorplan</a>
              </div>
            </div>
          </div>
          <div className="description">{propertyData?.description}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailPage;
