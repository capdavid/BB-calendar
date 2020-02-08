/*eslint no-unused-vars: ["warn", { "varsIgnorePattern": "^_" }]*/

import React from "react";
import styled from "@emotion/styled";

import TableCell from "./TableCell";

const DayTable = React.memo(props => {
  const { onCellSelect, date, times, selectedCell } = props;

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

  const reformattedDate = () => {
    return date
      .split("-")
      .reverse()
      .join("/");
  };

  return (
    <StyledDayTable>
      <TableCell heading>{reformattedDate()}</TableCell>

      {times.map(({ status, id }, cellIndex) => {
        const isSelectable = status === "free";
        const selectedIndex = cellIndex === selectedCell;

        return (
          <TableCell
            onClick={() => onCellSelect(status, cellIndex)}
            selectable={isSelectable}
            selected={selectedIndex}
            key={id}
          >
            {status}
          </TableCell>
        );
      })}
    </StyledDayTable>
  );
});

export default DayTable;
