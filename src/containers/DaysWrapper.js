import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { useStore } from "../hooks/store";

import DaysTable from "../containers/DaysTable";
import ScrollButton from "../components/ScrollButton";

const StyledDaysWrapper = styled.div`
  width: 70%;
  display: flex;
  position: relative;
`;

const DaysWrapper = () => {
  const [
    {
      calendar: { length: calendarLength }
    }
  ] = useStore();
  const [scrollState, setScrollState] = useState(0);

  const scrollHandler = useCallback(
    direction => {
      let scrollPos = scrollState;
      let maxDayCount;
      if (window.innerWidth < 800) {
        maxDayCount = calendarLength - 2;
      } else {
        maxDayCount = calendarLength - 3;
      }

      if (direction === "left" && scrollPos > 0) {
        scrollPos--;
      } else if (direction !== "left" && scrollPos < maxDayCount) {
        scrollPos++;
      }
      setScrollState(scrollPos);
    },
    [scrollState, calendarLength]
  );
  return (
    <StyledDaysWrapper>
      <ScrollButton left onClick={() => scrollHandler("left")}>
        &lt;
      </ScrollButton>
      <ScrollButton onClick={scrollHandler}>></ScrollButton>
      <DaysTable scrollPosition={scrollState} />
    </StyledDaysWrapper>
  );
};

export default DaysWrapper;
