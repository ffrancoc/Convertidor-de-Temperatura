import "./css/App.css";
import TempEntry from "./TempEntry";
import Fire from "./assets/fire.svg";
import Ice from "./assets/ice.svg";
import { useState } from "react";

function App() {
  const [celciusImage, setCelciusImage] = useState(Fire);
  const [celcius, setCelcius] = useState("0");
  const [fahrenheitImage, setFahrenheitImage] = useState(Fire);
  const [fahrenheit, setFahrenheit] = useState("32");
  const [kelvinImage, setKelvinImage] = useState(Fire);
  const [kelvin, setKelvin] = useState("273.15");
  const [rankineImage, setRankineImage] = useState(Fire);
  const [rankie, setRankie] = useState("491.67");

  const convertCelcius = (data) => {
    if (data === 0) {
      setCelcius("0");
      setFahrenheit("32");
      setKelvin("273.15");
      setRankie("491.67");
      return;
    }

    let fahrenheit_result = data * 1.8 + 32;
    let kelvin_result = data + 273.15;
    let rankie_result = data * 1.8 + 491.67;

    setCelcius("" + data);
    setFahrenheit("" + fahrenheit_result.toFixed(2));
    setKelvin("" + kelvin_result > 0 ? kelvin_result.toFixed(2) : "0");
    setRankie("" + rankie_result > 0 ? rankie_result.toFixed(2) : "0");

    setCelciusImage(data > 0 ? Fire : Ice);
    setFahrenheitImage(fahrenheit_result > 0 ? Fire : Ice);
    setKelvinImage(kelvin_result > 0 ? Fire : Ice);
    setRankineImage(rankie_result > 0 ? Fire : Ice);
  };

  const convertFahrenheit = (data) => {
    if (data === 0) {
      setFahrenheit("0");
      setCelcius("-17.7778");
      setKelvin("273.15");
      setRankie("459.67");
      return;
    }

    let celcius_result = (data - 32) * 0.56;
    let kelvin_result = celcius_result + 273.15;
    let rankie_result = data + 459.67;

    setFahrenheit("" + data);
    setCelcius("" + celcius_result.toFixed(2));
    setKelvin("" + kelvin_result > 0 ? kelvin_result.toFixed(2) : "0");
    setRankie("" + rankie_result > 0 ? rankie_result.toFixed(2) : "0");

    setFahrenheitImage(data > 0 ? Fire : Ice);
    setCelciusImage(celcius_result > 0 ? Fire : Ice);
    setKelvinImage(kelvin_result > 0 ? Fire : Ice);
    setRankineImage(rankie_result > 0 ? Fire : Ice);
  };

  const convertKelvin = (data) => {
    if (data === 0) {
      setKelvin("0");
      setCelcius("-273.15");
      setFahrenheit("-459.67");
      setRankie("0");
      return;
    }

    let celcius_result = data - 273.15;
    let fahrenheit_result = (data - 273.15) * 1.8 + 32;
    let rankie_result = data * 1.8;

    setKelvin("" + data);
    setCelcius("" + celcius_result.toFixed(2));
    setFahrenheit("" + fahrenheit_result.toFixed(2));
    setRankie("" + rankie_result > 0 ? rankie_result.toFixed(2) : "0");

    setKelvinImage(data > 0 ? Fire : Ice);
    setCelciusImage(celcius_result > 0 ? Fire : Ice);
    setFahrenheitImage(fahrenheit_result > 0 ? Fire : Ice);
    setRankineImage(rankie_result > 0 ? Fire : Ice);
  };

  const convertRankie = (data) => {
    if (data === 0) {
      setRankie("0");
      setKelvin("0");
      setCelcius("-273.15");
      setFahrenheit("-459.67");
      return;
    }

    let celcius_result = (data - 491.67) * 0.55;
    let fahrenheit_result = data - 459.67;
    let kelvin_result = data * 1.8;

    setRankie("" + data);
    setCelcius("" + celcius_result.toFixed(2));
    setFahrenheit("" + fahrenheit_result.toFixed(2));
    setKelvin("" + kelvin_result > 0 ? kelvin_result.toFixed(2) : "0");

    setRankineImage(data > 0 ? Fire : Ice);
    setCelciusImage(celcius_result > 0 ? Fire : Ice);
    setFahrenheitImage(fahrenheit_result > 0 ? Fire : Ice);
    setKelvinImage(kelvin_result > 0 ? Fire : Ice);
  };

  const changeTemperature = (temp) => {
    const data = Number(temp.target.value);
    switch (temp.target.name) {
      case "Celcius":
        convertCelcius(data);
        break;
      case "Fahrenheit":
        convertFahrenheit(data);
        break;
      case "Kelvin":
        convertKelvin(data);
        break;
      case "Rankine":
        convertRankie(data);
        break;
    }
  };

  return (
    <div className="contenedor">
      <h1>CONVERTIDOR DE TEMPERATURA</h1>
      <div className="temp-entries">
        <TempEntry
          value={celcius}
          title={"Celcius"}
          Image={celciusImage}
          Negative={true}
          changeTemperature={changeTemperature}
        ></TempEntry>
        <TempEntry
          value={fahrenheit}
          title={"Fahrenheit"}
          Image={fahrenheitImage}
          Negative={true}
          changeTemperature={changeTemperature}
        ></TempEntry>
        <TempEntry
          value={kelvin}
          title={"Kelvin"}
          Image={kelvinImage}
          Negative={false}
          changeTemperature={changeTemperature}
        ></TempEntry>
        <TempEntry
          value={rankie}
          title={"Rankine"}
          Image={rankineImage}
          Negative={false}
          changeTemperature={changeTemperature}
        ></TempEntry>
      </div>
    </div>
  );
}

export default App;
