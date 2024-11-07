import React, { useState } from "react";
import styled from "styled-components";
import { FrontBook } from "@pages";
import { FoterPage } from "@molecules";

const BookContainer = styled.div`
  width: 80vw;
  height: 80vh;
  position: relative;
  display: flex;
  border: 2px solid #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;

const PageLeft = styled.div<{ isOpen: boolean }>`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f0e5d8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: ${({ isOpen }) => (isOpen ? "1px solid #ccc" : "none")};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.6s ease-in-out;
  z-index: 2; /* Superpone PageLeft sobre PageRing cuando está cerrado */
`;

const PageRing = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const BookXl = () => {
  const [step, setStep] = useState<number>(0);

  const handleAdvance = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const isOpen = step > 0;

  return (
    <BookContainer>
      {/* Página izquierda (superpuesta inicialmente y luego animada) */}
      <PageLeft isOpen={isOpen}>
        {step === 0 ? (
          <FrontBook />
        ) : (
          <div>
            <h2>Contenido de la Página Izquierda</h2>
            <p>
              Esta es la información que se muestra cuando el libro está
              abierto.
            </p>
          </div>
        )}
        <FoterPage
          step={step}
          onAdvance={handleAdvance}
          onPrevious={handlePrevious}
        />
      </PageLeft>

      <PageRing>
        {isOpen ? (
          <h1>Contenido de la Página Derecha</h1>
        ) : (
          <h1>Bienvenido al Libro Cerrado</h1>
        )}
      </PageRing>
    </BookContainer>
  );
};
