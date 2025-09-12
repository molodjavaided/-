import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({ className }) => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");
  const API = "ed13801984235096430e83b823db8a7c";
  const LINK = `https://api.openweathermap.org/data/2.5/weather?q=Chelyabinsk&units=metric&lang=ru&appid=${API}`;

  useEffect(() => {
    fetch(LINK)
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);

  return (
    <div className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <div>web@developer.ru</div>
      </div>
      <div>
        <div>
          {city},{" "}
          {new Date().toLocaleString("ru", {
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
        <div>
          {temperature}°C {weather}
        </div>
      </div>
    </div>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 120px;
  padding: 25px 54px;
  font-weigth: bold;
  background-color: #fff;
  box-shadow: 0 -7px 25px 5px #616161;
`;
