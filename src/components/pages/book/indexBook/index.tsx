import styled from "styled-components";
import { FoterPage } from "@molecules";

// Contenedor estilizado para la tapa frontal
const FrontBookContainer = styled.div`
  width: 40vw; /* Mitad del ancho del libro abierto */
  height: 80vh; /* Mismo alto que el libro abierto */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000; /* Borde para simular el contorno */
  background-color: #d3a625; /* Color de tapa (puedes cambiarlo al color que prefieras) */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra para efecto de profundidad */
`;

export const IndexBook = () => {
  return (
    <FrontBookContainer>
      <h1>IndexBook</h1>
      <FoterPage type="Previous" />
    </FrontBookContainer>
  );
};
