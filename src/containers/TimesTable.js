import React from 'react';
import styled from '@emotion/styled';

import { useStore } from '../hooks/store';

import TableCell from '../components/TableCell';

export const TimesTable = () => {
    const state = useStore()[0];

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

    return (
        <StyledTimeTable>
            <TableCell heading>Zvolte čas</TableCell>
            {state.calendar[0]?.timeslots.map((time, index) => (
                <TableCell
                    key={time.id}
                    selectedTime={index === state.selectedCell[1] ? true : false}
                >{`${time.from} - ${time.to}`}</TableCell>
            ))}
        </StyledTimeTable>
    );
};

export default TimesTable;
