import {
  FiArrowUp as iconArrowUp,
  FiArrowDown as iconArrowDown,
  FiSunrise as iconSunrise,
  FiSunset as iconSunset,
  FiThermometer as iconThermometer,
  FiDroplet as iconDroplet,
  FiWind as iconWind
} from "react-icons/fi";

import styled, { css } from "styled-components";

import { fonts } from "../../styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.secundary};
`;

export const City = styled.h1`
  font-size: ${fonts.big};
  color: ${props => props.theme.colors.gray};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const ContainerTemp = styled.header`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 100px;
  filter: grayscale(0.6);
`;

export const TempDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.strong`
  font-size: ${fonts.regular2};
  text-transform: lowercase;
  color: ${props => props.theme.colors.grayLight};
`;

export const Temp = styled.strong`
  display: flex;
  align-items: center;
  font-size: ${fonts.biggest};
  color: ${props => props.theme.colors.primary};
`;

export const Unit = styled.span`
  font-size: ${fonts.regular2};
`;

export const MaxMin = styled.div`
  font-size: ${fonts.regular};
  margin-left: 10px;
`;

const Icon = css`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: ${fonts.regular2};
`;

export const Max = styled.span`
  ${Icon}
`;

export const FiArrowUp = styled(iconArrowUp)`
  color: ${props => props.theme.colors.iconArrowUp};
  margin-right: 5px;
`;

export const Min = styled.span`
  ${Icon}
`;

export const FiArrowDown = styled(iconArrowDown)`
  color: ${props => props.theme.colors.iconArrowDown};
  margin-right: 5px;
`;

export const WeatherInfos = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.colors.gray};

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 5px;
  }
`;

export const Sun = styled.div``;

export const Sunrise = styled.span`
  ${Icon}
`;

export const FiSunrice = styled(iconSunrise)`
  color: ${props => props.theme.colors.iconSunrise};
  margin-right: 5px;
`;

export const Sunset = styled.span`
  ${Icon}
`;

export const FiSunset = styled(iconSunset)`
  color: ${props => props.theme.colors.iconSunset};
  margin-right: 5px;
`;

export const FeelsLike = styled.span`
  ${Icon}
`;

export const FiThermometer = styled(iconThermometer)`
  color: ${props => props.theme.colors.iconThermometer};
  margin-right: 5px;
`;

export const Humidity = styled.span`
  ${Icon}
`;

export const FiDroplet = styled(iconDroplet)`
  color: ${props => props.theme.colors.iconDroplet};
  margin-right: 5px;
`;

export const Wind = styled.span`
  ${Icon}
`;

export const FiWind = styled(iconWind)`
  color: ${props => props.theme.colors.iconWind};
  margin-right: 5px;
`;
