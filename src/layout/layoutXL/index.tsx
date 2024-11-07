import React from "react";
import styled from "styled-components";
import { BookXl } from "@templates";

const Container = styled.div`
  width: 80vw;
  height: 80vh;
`;

export const LayoutXL = () => {
  return (
    <Container>
      <BookXl />
    </Container>
  );
};
