import { FrontBook, IndexBook } from "@pages";
import styled from "styled-components";
import { AnimatedPage } from "@animated";
import { RootState } from "@store";
import { useSelector } from "react-redux";

const BookContainer = styled.div`
  width: 70vw;
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  perspective: 4500px;
`;

export const BookXl = () => {
  const step = useSelector((state: RootState) => state.book.step);

  const isOpen = step > 0;
  console.log({ step, isOpen });
  return (
    <BookContainer>
      <AnimatedPage
        isOpen={isOpen}
        origin="left center"
        backgroundColor="#d3a625"
        frontContent={<FrontBook />}
        backContent={<IndexBook />}
      />
    </BookContainer>
  );
};
