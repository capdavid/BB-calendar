import React from "react";
import styled from "@emotion/styled";

import { useStore } from "../hooks/store";

import TableCell from "../components/TableCell";

export const TimesTable = () => {
  const [store] = useStore();

  const StyledTimeTable = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    text-align: center;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px 9px;
    z-index: 1;
  `;

  const selectTimeHighlight = index => {
    return index === store.selectedCell.cellIndex ? true : false;
  };
  console.log(store);

  return (
    <StyledTimeTable>
      <TableCell heading>Zvolte čas</TableCell>
      {store.calendar[0]?.timeslots.map(({ id, from, to }, index) => (
        <TableCell key={id} selectedTime={selectTimeHighlight(index)}>
          {`${from} - ${to}`}
        </TableCell>
      ))}
    </StyledTimeTable>
  );
};

export default TimesTable;
