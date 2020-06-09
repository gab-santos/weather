/* eslint-disable react/prop-types */
import React from "react";

import { Text } from "./styles";

export default function ErrorApi({ loading, show }) {
  return !loading && !!show && <Text>{show}</Text>;
}
