import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from "react";
import Switch from "react-switch";

import { Form } from "@unform/web";
import { shade } from "polished";
import { ThemeContext } from "styled-components";

import CurrentWeather from "../../components/CurrentWeather";
import ErrorApi from "../../components/ErrorApi";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import WeekWeather from "../../components/WeekWeather";
import api from "../../services/api";
import convertUnixTimestamps from "../../utils/convertUnixTimestamps";
import { Container } from "./styles";

export default function Weather({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);
  const lang = "pt_br";
  const units = "metric";
  const [currentWeather, setCurrentWeather] = useState([]);
  const [weekWeather, setWeekWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorApi, setErrorApi] = useState("");
  const formRef = useRef(null);

  function agrupWeekData(week) {
    const newList = [];
    week.list.forEach((item, index) => {
      const currentDay = convertUnixTimestamps.getDate(item.dt);
      const previousDay =
        index > 0 ? convertUnixTimestamps.getDate(week.list[index - 1].dt) : -1;

      if (currentDay === previousDay) return;

      const dataOfTheCurrentDay = week.list.filter(
        (day) => currentDay === convertUnixTimestamps.getDate(day.dt)
      );

      newList.push({
        dateTime: convertUnixTimestamps.getDate(item.dt),
        data: dataOfTheCurrentDay,
      });
    });

    setWeekWeather(newList);
  }

  function requestParams(type, position) {
    if (type === "coords" || !formRef.current?.getFieldValue("city")) {
      return {
        lat: position.coords.latitude.toString(),
        lon: position.coords.longitude.toString(),
        lang,
        units,
        appid: process.env.REACT_APP_API_ID,
      };
    }
    return {
      q: formRef.current.getFieldValue("city"),
      lang,
      units,
      appid: process.env.REACT_APP_API_ID,
    };
  }

  const getWeather = useCallback(async (type, position) => {
    try {
      setLoading(true);
      let response = await api.get("/weather", {
        params: requestParams(type, position),
      });
      setCurrentWeather(response.data);

      response = await api.get("/forecast", {
        params: requestParams(type, position),
      });
      agrupWeekData(response.data);
      //
    } catch ({ response }) {
      setErrorApi(response?.data.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => getWeather("coords", position),
      (err) => console.log(err)
    );
  }, [getWeather]);

  function handleSubmit() {
    getWeather("city");
  }

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === "light"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={30}
        handleDiameter={20}
        onColor={shade(0.3, colors.background)}
      />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          type="search"
          name="city"
          placeholder="Pesquise. Exemplo: Dobrada, Sp, BR"
        />
      </Form>
      <Loading show={loading} />
      <ErrorApi loading={loading} show={errorApi} />
      {!loading && !errorApi && (
        <>
          <CurrentWeather current={currentWeather} />
          <WeekWeather week={weekWeather} />
        </>
      )}
    </Container>
  );
}
