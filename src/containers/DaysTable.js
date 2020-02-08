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
  const [store, dispatch] = useStore();

  return (
    <StyledDaysTable {...props}>
      {store.calendar.map(({ date, timeslots }, index) => {
        const cellSelectHandler = (status, cellIndex, dayIndex = index) => {
          return (
            status === "free" &&
            dispatch("SELECT_TIMESLOT", dayIndex, cellIndex)
          );
        };

        const selectedCellIndex =
          store.selectedCell.dayIndex === index
            ? store.selectedCell.cellIndex
            : null;

        return (
          <DayTable
            onCellSelect={cellSelectHandler}
            selectedCell={selectedCellIndex}
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
