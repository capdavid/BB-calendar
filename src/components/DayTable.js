/*eslint no-unused-vars: ["warn", { "varsIgnorePattern": "^_" }]*/

import React from "react";
import styled from "@emotion/styled";
import { useStore } from "../hooks/store";

import TableCell from "./TableCell";

const DayTable = React.memo(props => {
  const [_s, dispatch] = useStore();
  const { dayIndex, date, times, selectedCell } = props;

  const StyledDayTable = styled.div`
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 33.33%;
    flex-direction: column;
    @media (max-width: 800px) {
      flex-basis: 50%;
    }
  `;

  const timeslotSelectHadnler = (status, cellIndex) => {
    return (
      status === "free" && dispatch("SELECT_TIMESLOT", dayIndex, cellIndex)
    );
  };

  return (
    <StyledDayTable>
      <TableCell heading>
        {date
          .split("-")
          .reverse()
          .join("/")}
      </TableCell>
      {times.map(({ status, id }, index) => (
        <TableCell
          onClick={() => timeslotSelectHadnler(status, index)}
          selectable={status === "free" ? true : false}
          selected={index === selectedCell ? true : false}
          key={id}
        >
          {status}
        </TableCell>
      ))}
    </StyledDayTable>
  );
});

export default DayTable;
