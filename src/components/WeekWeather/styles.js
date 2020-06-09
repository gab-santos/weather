import {
  FiArrowUp as iconArrowUp,
  FiArrowDown as iconArrowDown,
  FiThermometer as iconThermometer,
  FiDroplet as iconDroplet,
  FiWind as iconWind,
} from "react-icons/fi";

import styled, { css } from "styled-components";

import { fonts } from "../../styles";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secundary};
  padding: 20px 0;
  border-radius: 0 0 4px 4px;
`;

export const Title = styled.h2`
  font-size: ${fonts.regular2};
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
`;

export const List = styled.ul`
  margin-top: 10px;
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.primary};

  :not(:last-of-type) {
    margin-bottom: 10px;
  }

  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    box-shadow: 0 0 8px 0 ${(props) => props.theme.colors.shadow};
  }
`;

const block = css`
  flex: 1;
  display: grid;
  align-items: center;
`;

export const BlockHeader = styled.header`
  ${block};
  grid-template-columns: repeat(3, 1fr);
`;

export const DateTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Date = styled.h2`
  margin-top: 20px;
  text-align: center;
  font-size: ${fonts.regular2};
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
`;

export const Time = styled.strong`
  font-size: ${fonts.regular2};
`;

export const Image = styled.img`
  height: 60px;
  justify-self: center;
`;

export const TempDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.strong`
  font-size: ${fonts.regular};
  text-transform: lowercase;
  color: ${(props) => props.theme.colors.grayLight};
`;

export const Temperature = styled.strong`
  display: flex;
  align-items: center;
  font-size: ${fonts.big};
`;

export const Unit = styled.span`
  font-size: ${fonts.regular};
`;

export const BlockFooter = styled.footer`
  ${block};
  grid-template-columns: repeat(4, 1fr);
`;

export const MaxMin = styled.div``;

const blockInfo = css`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: ${fonts.regular};

  @media (max-width: 550px) {
    justify-content: center;
  }
`;

export const Max = styled.span`
  ${blockInfo}
`;

export const FiArrowUp = styled(iconArrowUp)`
  color: ${(props) => props.theme.colors.iconArrowUp};
  margin-right: 5px;
`;

export const Min = styled.span`
  ${blockInfo}
`;

export const FiArrowDown = styled(iconArrowDown)`
  color: ${(props) => props.theme.colors.iconArrowDown};
  margin-right: 5px;
`;

export const FeelsLike = styled.span`
  ${blockInfo}
`;

export const FiThermometer = styled(iconThermometer)`
  color: ${(props) => props.theme.colors.iconThermometer};
  margin-right: 5px;
`;

export const Humidity = styled.span`
  ${blockInfo}
`;

export const FiDroplet = styled(iconDroplet)`
  color: ${(props) => props.theme.colors.iconDroplet};
  margin-right: 5px;
`;

export const Wind = styled.span`
  ${blockInfo}
`;

export const FiWind = styled(iconWind)`
  color: ${(props) => props.theme.colors.iconWind};
  margin-right: 5px;
`;
