/* eslint-disable react/prop-types */
import React, { memo } from "react";

import convertUnixTimestamps from "../../utils/convertUnixTimestamps";
import {
  Container,
  City,
  ContainerTemp,
  Image,
  TempDescription,
  Description,
  Temp,
  Unit,
  MaxMin,
  Max,
  FiArrowUp,
  Min,
  FiArrowDown,
  WeatherInfos,
  Sun,
  Sunrise,
  FiSunrice,
  Sunset,
  FiSunset,
  FeelsLike,
  FiThermometer,
  Humidity,
  FiDroplet,
  Wind,
  FiWind,
} from "./styles";

function CurrentWeather({ current }) {
  const weatherImage = `https://openweathermap.org/img/w/${current?.weather[0].icon}.png`;

  return (
    <Container>
      <City>{current.name}</City>
      <ContainerTemp>
        <Image src={weatherImage} />
        <TempDescription>
          <Description>{current.weather[0].description}</Description>
          <Temp>
            {current.main.temp.toFixed(0)}
            <Unit>°C</Unit>
            <MaxMin>
              <Max>
                <FiArrowUp />
                {current.main.temp_max.toFixed(0)} °C
              </Max>
              <Min>
                <FiArrowDown />
                {current.main.temp_min.toFixed(0)} °C
              </Min>
            </MaxMin>
          </Temp>
        </TempDescription>
      </ContainerTemp>
      <WeatherInfos>
        <Sun>
          <Sunrise>
            <FiSunrice />
            {convertUnixTimestamps.getHour(current.sys.sunrise)} h
          </Sunrise>
          <Sunset>
            <FiSunset />
            {convertUnixTimestamps.getHour(current.sys.sunset)} h
          </Sunset>
        </Sun>
        <FeelsLike>
          <FiThermometer />
          {current.main.feels_like.toFixed(0)} °C
        </FeelsLike>
        <Humidity>
          <FiDroplet />
          {current.main.humidity} %
        </Humidity>
        <Wind>
          <FiWind />
          {current.wind.speed.toFixed(0)} m/s
        </Wind>
      </WeatherInfos>
    </Container>
  );
}

export default memo(CurrentWeather);
