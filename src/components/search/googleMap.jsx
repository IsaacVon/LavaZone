import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  InfoWindow,
} from "@react-google-maps/api";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import bug from "../../assets/bug.png";

const libraries = ["places"];

const options = {
  disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false,
};

const useStyles = makeStyles((theme) => ({
  pos: {
    paddingBottom: 0,
  },
}));

export default function CompleteMap(props) {
  const classes = useStyles();

  // Set Map Zoom dependant on screen size
  const mapDefaultZoom = 8.2;
  const inputMargin = "auto";
  const inputLeft = 0;

  const mapContainerStyle = {
    height: "120%",
  };

  // Use pin from search for center if it is not null.
  const defaultCenter = { lat: 19.27, lng: -155.56 };
  const pinCenter = { lat: props.lat, lng: props.lng };
  const searchViewOffsetCenter = { lat: props.lat + 0.0, lng: props.lng };
  let center = props.lat ? pinCenter : defaultCenter;

  const inputFieldStyle = {
    boxSizing: `border-box`,
    border: `1px solid transparent`,
    width: `240px`,
    height: `40px`,
    padding: `0 12px`,
    borderRadius: `20px`,
    boxShadow: `0 1px 3px rgba(0, 0, 0, 0.2)`,
    fontSize: `18px`,
    outline: `none`,
    position: "absolute",
    textOverflow: `ellipses`,
    top: "20px",
    left: inputLeft,
    right: "0px",
    margin: inputMargin,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCGJr4hqm5LtdMCGQo7mCZvO-HEvKV54DM",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  // Correct Search
  if (props.lat) {
    return (
      <>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9.5}
          center={searchViewOffsetCenter}
          options={options}
        >
          <Marker
            position={{
              lat: props.lat,
              lng: props.lng,
            }}
          />
          <InfoWindow
            style={{
              borderRadius: `20px`,
            }}
            position={{
              lat: props.lat,
              lng: props.lng,
            }}
          >
            <>
              <div className="infoWindow">
                <div className="infoLogoContainer">
                  <img src={bug} alt="HawaiiLavaZones" />
                  <p className="infoBoxName">
                    <span
                      style={{
                        fontWeight: "200",
                      }}
                    >
                      HAWAII
                    </span>
                    <span
                      style={{
                        fontWeight: "normal",
                      }}
                    >
                      LAVA
                    </span>
                    <span
                      style={{
                        fontWeight: "200",
                      }}
                    >
                      ZONES
                    </span>
                  </p>{" "}
                </div>

                <div>
                  <div className="infoBoxRightContainer">
                    <p className="infoBoxZone">Lava Zone {props.lavaZone}</p>
                    <p className="infoBoxAddress">{props.searchAddress}</p>
                    {/* <Link
                      href="/ZoneInformation"
                      variant="body2"
                      color="primary"
                    >
                      <p className="infoBoxLearnMore">Learn More</p>
                    </Link> */}
                  </div>
                </div>
              </div>
            </>
          </InfoWindow>
          <StandaloneSearchBox onPlacesChanged={props.onPlacesChanged}>
            <input
              type="text"
              id="addressSearch"
              placeholder="Search Address"
              name="searchAddress"
              style={inputFieldStyle}
            />
          </StandaloneSearchBox>
        </GoogleMap>
      </>
    );
  }

  // Invalid address
  else if (!props.addressValid) {
    return (
      <>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={mapDefaultZoom}
          center={defaultCenter}
          options={options}
        >
          <InfoWindow position={defaultCenter}>
            <>
              <Typography color="primary" variant="h6">
                We cant find that address on this island.
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                className={classes.pos}
              >
                {props.searchAddress}
              </Typography>
            </>
          </InfoWindow>
          <StandaloneSearchBox onPlacesChanged={props.onPlacesChanged}>
            <input
              type="text"
              id="addressSearch"
              placeholder="Search Address"
              name="searchAddress"
              style={inputFieldStyle}
            />
          </StandaloneSearchBox>
        </GoogleMap>
      </>
    );
  }

  // Before user searches
  else if (!props.lat) {
    return (
      <>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={mapDefaultZoom}
          center={center}
          options={options}
        >
          <StandaloneSearchBox onPlacesChanged={props.onPlacesChanged}>
            <input
              type="text"
              id="addressSearch"
              placeholder="Search Address"
              name="searchAddress"
              style={inputFieldStyle}
            />
          </StandaloneSearchBox>
        </GoogleMap>
      </>
    );
  }
}
