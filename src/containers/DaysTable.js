import React from "react";
import styled from "@emotion/styled";

import DayTable from "../components/DayTable";
import { useStore } from "../hooks/store";

const StyledDaysTable = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  transform: ${props => `translateX(calc(-${props.scrollPosition}*33.34%))`};
  transition: all 0.5s;
  @media (max-width: 800px) {
    transform: ${props => `translateX(calc(-${props.scrollPosition}*50%))`};
  }
`;

const DaysTable = props => {
  const [store] = useStore();

  return (
    <StyledDaysTable {...props}>
      {store.calendar.map(({ date, timeslots }, index) => {
        const selectedIndex =
          store.selectedCell[0] === index ? store.selectedCell[1] : null;
        return (
          <DayTable
            dayIndex={index}
            selectedCell={selectedIndex}
            key={date}
            times={timeslots}
            date={date}
          />
        );
      })}
    </StyledDaysTable>
  );
};

export default DaysTable;
