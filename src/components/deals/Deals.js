import React from "react";
import Header from "../header/Header";
import "./Deals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Slider from "@mui/material/Slider";
import ProductCard from "../productCard/ProductCard";
import Footer from "../footer/Footer";

export default function Deals() {
  const [value, setValue] = React.useState([0, 5000]);
  function valuetext(value) {
    console.log(value);
    return `${value} BDT`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <div className="dealsSection">
        <div className="dealsLeftSection">
          <div className="dealsLeftSectionFirstPart">
            <p
              style={{ fontSize: "14px", color: "#fd841f", fontWeight: "bold" }}
            >
              RENT FOR <FontAwesomeIcon icon={faInfoCircle} />
            </p>
            <br />
            <div>
              <button className="rentDurationButton">1 week</button>
            </div>
            <div>
              <button className="rentDurationButton">2 weeks</button>
            </div>
            <div>
              <button className="rentDurationButton">1 month</button>
            </div>
            <div>
              <button className="rentDurationButton">2 month</button>
            </div>
            <div>
              <button className="rentDurationButton">3 months</button>
            </div>
          </div>

          <div className="dealsLeftSectionSecondPart">
            <p
              style={{ fontSize: "14px", color: "#fd841f", fontWeight: "bold" }}
            >
              SORT BY
            </p>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="popular"
                  control={<Radio />}
                  label="Most popular"
                  sx={{
                    color: "#fd841f",
                    "&.Mui-checked": {
                      color: "#fd841f",
                    },
                  }}
                />
                <FormControlLabel
                  value="descending"
                  control={<Radio />}
                  label="Price (high to low)"
                  sx={{
                    color: "#fd841f",
                    "&.Mui-checked": {
                      color: "#fd841f",
                    },
                  }}
                />
                <FormControlLabel
                  value="ascending"
                  control={<Radio />}
                  label="Price (low to high)"
                  sx={{
                    color: "#fd841f",
                    "&.Mui-checked": {
                      color: "#fd841f",
                    },
                  }}
                />
                <FormControlLabel
                  value="new"
                  control={<Radio />}
                  label="New arrivals"
                  sx={{
                    color: "#fd841f",
                    "&.Mui-checked": {
                      color: "#fd841f",
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="dealsLeftSectionSecondPart">
            <p
              style={{ fontSize: "14px", color: "#fd841f", fontWeight: "bold" }}
            >
              WEEKLY PRICE
            </p>
            <Slider
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              sx={{
                color: "#fd841f",
              }}
            />
          </div>
        </div>
        <div className="dealsRightSection">
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
        </div>
       
      </div>
      <Footer />
    </>
  );
}
