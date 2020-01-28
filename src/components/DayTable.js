import React from 'react';
import styled from '@emotion/styled';
import { useStore } from '../hooks/store';

import TableCell from './TableCell';

const DayTable = React.memo(props => {
    const dispatch = useStore()[1];

    const StyledDayTable = styled.div`
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 33.33%;
        flex-direction: column;
        /* WTF IS HAPPENING, PLEASE HELP am I creating a new variable if I do (props => props.scrollPosition..?? */
        /* WTF IS HAPPENING, PLEASE HELP box example*/
        /* WTF IS HAPPENING, PLEASE HELP */
    `;

    return (
        <StyledDayTable>
            <TableCell heading>
                {props.date
                    .split('-')
                    .reverse()
                    .join('/')}
            </TableCell>
            {props.times.map((time, index) => (
                <TableCell
                    onClick={time.status === 'free' ? () => dispatch('SELECT_TIMESLOT', [props.dayIndex, index]) : null}
                    selectable={time.status === 'free' ? true : false}
                    //I don't like this check for every cell, is there a better way?
                    selected={index === props.selectedCell ? true : false}
                    key={time.id}
                >
                    {time.status}
                </TableCell>
            ))}
        </StyledDayTable>
    );
});

export default DayTable;
