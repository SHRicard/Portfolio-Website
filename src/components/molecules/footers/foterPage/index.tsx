import styled from "styled-components";
import { Advance, Previous } from "@atoms";
import { useDispatch } from "react-redux";
import { advanceStep, previousStep } from "@slices";

const Container = styled.div<{ isPrevious: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${({ isPrevious }) =>
    isPrevious ? "flex-start" : "flex-end"}; /* Cambia la posición del botón */
  padding: 10px 5px;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

interface IFooter {
  type: "Advance" | "Previous";
}

export const FoterPage = ({ type }: IFooter) => {
  const dispatch = useDispatch();

  const handleAdvance = () => {
    dispatch(advanceStep());
  };

  const handlePrevious = () => {
    dispatch(previousStep());
  };

  return (
    <Container isPrevious={type === "Previous"}>
      {type === "Advance" && <Advance onClick={handleAdvance} />}
      {type === "Previous" && <Previous onClick={handlePrevious} />}
    </Container>
  );
};
