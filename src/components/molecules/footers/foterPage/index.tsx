import React from "react";
import styled from "styled-components";
import { Advance, Previous } from "@atoms";

const Container = styled.div<{ alignRight: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${({ alignRight }) =>
    alignRight ? "flex-end" : "flex-start"};
  padding: 10px 5px;
  position: absolute;
  bottom: 0;
`;

interface FooterProps {
  step: number;
  onAdvance: () => void;
  onPrevious: () => void;
}

export const FoterPage: React.FC<FooterProps> = ({
  step,
  onAdvance,
  onPrevious,
}) => {
  return (
    <Container alignRight={step === 0 || step === 2}>
      {step === 0 && <Advance onClick={onAdvance} />}
      {step === 1 && <Previous onClick={onPrevious} />}
      {step === 2 && <Advance onClick={onAdvance} />}
      {step === 3 && <Previous onClick={onPrevious} />}
    </Container>
  );
};
