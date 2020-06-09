/* eslint-disable react/prop-types */
import React from "react";

import { Container, Spinner } from "./styles";

export default function Loading({ show }) {
  return (
    show && (
      <Container>
        <Spinner size={35} color="#fff" loading={show} />
      </Container>
    )
  );
}
