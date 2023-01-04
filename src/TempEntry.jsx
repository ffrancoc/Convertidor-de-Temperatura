import React from "react";
import PropTypes from "prop-types";
import "./css/TempEntry.css";

function TempEntry({ value, title, Image, Negative, changeTemperature }) {
  return (
    <div className={"temp-entry temp-entry-" + title.toLowerCase()}>
      <img src={Image} alt="not found" width="50px" />
      <p>{title}</p>
      {Negative ? (
        <input
          type="number"
          step="1"
          name={title}
          value={value}
          onChange={changeTemperature}
        />
      ) : (
        <input
          type="number"
          min="0"
          step="1"
          name={title}
          value={value}
          onChange={changeTemperature}
        />
      )}
    </div>
  );
}

TempEntry.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  Image: PropTypes.string,
  Negative: PropTypes.bool,
  changeTemperature: PropTypes.func,
};

export default TempEntry;
