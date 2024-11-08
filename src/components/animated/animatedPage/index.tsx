import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AnimatedContainer = styled.div<{ isOpen: boolean; origin: string }>`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: ${({ origin }) => origin};
  transform: ${({ isOpen }) => (isOpen ? "rotateY(-180deg)" : "rotateY(0deg)")};
  transition: transform 1.8s ease-in-out;
  perspective: 1000px; /* Añade profundidad para el efecto 3D */
`;

const ContentWrapper = styled.div<{ opacity: number; isReversed?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ isReversed }) => (isReversed ? "rotateY(180deg)" : "none")};
  opacity: ${({ opacity }) => opacity};
  transition: opacity 1.8s ease-in-out;
`;

type AnimatedPageProps = {
  isOpen: boolean;
  origin: string;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  backgroundColor?: string;
  style?: React.CSSProperties;
};

export const AnimatedPage: React.FC<AnimatedPageProps> = ({
  isOpen,
  origin,
  frontContent,
  backContent,
  backgroundColor = "#d3a625",
}) => {
  const [frontOpacity, setFrontOpacity] = useState(1);
  const [backOpacity, setBackOpacity] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setFrontOpacity(0);
      setTimeout(() => setBackOpacity(1), 0);
    } else {
      setBackOpacity(0);
      setTimeout(() => setFrontOpacity(1), 0);
    }
  }, [isOpen]);

  return (
    <AnimatedContainer
      isOpen={isOpen}
      origin={origin}
      style={{ backgroundColor }}
    >
      <ContentWrapper opacity={frontOpacity}>{frontContent}</ContentWrapper>
      <ContentWrapper opacity={backOpacity} isReversed>
        {backContent}
      </ContentWrapper>
    </AnimatedContainer>
  );
};
