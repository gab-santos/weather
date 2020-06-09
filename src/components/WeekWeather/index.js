/* eslint-disable react/prop-types */
import React, { memo } from "react";

import convertUnixTimestamps from "../../utils/convertUnixTimestamps";
import {
  Container,
  Title,
  List,
  ItemList,
  BlockHeader,
  DateTime,
  Date,
  Time,
  Image,
  TempDescription,
  Description,
  Temperature,
  Unit,
  BlockFooter,
  MaxMin,
  Max,
  FiArrowUp,
  Min,
  FiArrowDown,
  FeelsLike,
  FiThermometer,
  Humidity,
  FiDroplet,
  Wind,
  FiWind,
} from "./styles";

function WeekWeather({ week }) {
  return (
    <Container>
      <Title>Previsão do tempo nos próximos 5 dias a cada 3 horas</Title>
      {week.map((day) => (
        <List key={day.dateTime}>
          <Date>{day.dateTime}</Date>
          {day.data.map((item) => (
            <ItemList key={item.dt}>
              <BlockHeader>
                <DateTime>
                  <Time>{convertUnixTimestamps.getHour(item.dt)}</Time>
                </DateTime>
                <Image
                  src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                />
                <TempDescription>
                  <Description>{item.weather[0].description}</Description>
                  <Temperature>
                    {item.main.temp.toFixed(0)}
                    <Unit>°C</Unit>
                  </Temperature>
                </TempDescription>
              </BlockHeader>

              <BlockFooter>
                <MaxMin>
                  <Max>
                    <FiArrowUp />
                    {item.main.temp_max.toFixed(0)} °C
                  </Max>
                  <Min>
                    <FiArrowDown />
                    {item.main.temp_min.toFixed(0)} °C
                  </Min>
                </MaxMin>
                <FeelsLike>
                  <FiThermometer />
                  {item.main.feels_like.toFixed(0)} °C
                </FeelsLike>
                <Humidity>
                  <FiDroplet />
                  {item.main.humidity} %
                </Humidity>
                <Wind>
                  <FiWind />
                  {item.wind.speed.toFixed(0)} m/h
                </Wind>
              </BlockFooter>
            </ItemList>
          ))}
        </List>
      ))}
    </Container>
  );
}

export default memo(WeekWeather);
