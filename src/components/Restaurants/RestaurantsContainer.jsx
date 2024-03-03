import { useEffect, useState } from "react";
import { restaurants } from "../../utils/Mockdata";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function RestaurantsContainer() {
  const [resList, setReslist] = useState([]);
  const options = ["Option 1", "Option 2", "Option 3"];

  useEffect(() => {
    const fetchRes = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9709949&lng=77.6886853&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const finalRes = await data.json();
        const finalResData = await finalRes.data.cards[4].card.card.gridElements
          .infoWithStyle.restaurants;
        console.log(
          "data",
          finalRes.data.cards[4].card.card.gridElements.infoWithStyle
            .restaurants
        );
        setReslist(finalResData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchRes();
  }, []);

  const cardStyle = {
    width: "250px",
    height: "400px",
    border: "1px solid black",
    margin: "5px",
    borderRadius: "10px",
    padding: "5px",
    backgroundColor: "#00000",
    coursor: "pointer",
  };

  const cardConatiner = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const imgStyle = {
    width: "250px",
    borderRadius: "10px",
    margin: "auto",
    height: "200px",
    objectFit: "cover",
  };

  const cusineStyle = {
    whiteSpace: "pre-wrap",
  };

  const auc = {
    width: "200px",
  };

  const sortByRating = () => {
    let sortedRes = [...resList];
    sortedRes.sort((a, b) => b.info.avgRating - a.info.avgRating);
    setReslist(sortedRes);
  };

  return (
    <>
      <div>
        <p>
          <button onClick={sortByRating}> Sort By Rating </button>
          <Button variant="contained" color="primary">
            Click me
          </Button>
          <Autocomplete
            options={options}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select an option"
                variant="outlined"
                style={auc}
              />
            )}
          />
        </p>
        <div style={cardConatiner}>
          {resList.map((item) => (
            <div key={item.info?.id} style={cardStyle}>
              <img
                alt={item.info.cloudinaryImageId}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
                style={imgStyle}
              />
              <h3>{item.info?.name} </h3>
              <div style={cusineStyle}>{item.info?.cuisines.join(",")}</div>
              <p>{item.info.areaName}</p>
              <p>{item.info.avgRating}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RestaurantsContainer;
