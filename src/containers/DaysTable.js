import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';

import DayTable from '../components/DayTable';
import ScrollButton from '../components/ScrollButton';
import { useStore } from '../hooks/store';

const DaysTable = () => {
    const state = useStore()[0];
    const [scrollState, setScrollState] = useState(0);
    console.log('Days table rendering');

    const scrollHandler = useCallback(
        direction => {
            console.log(scrollState);
            let scrollPos = scrollState;
            const maxDayCount = state.calendar.length - 3;

            if (direction === 'left' && scrollPos > 0) {
                scrollPos--;
            } else if (direction !== 'left' && scrollPos < maxDayCount) {
                scrollPos++;
            }
            setScrollState(scrollPos);
        },
        [scrollState, state.calendar.length]
    );

    // console.log(state.scrollPosition);
    const StyledDaysTable = styled.div`
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        /* align-items: center; */
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
    `;

    return (
        <StyledDaysTable>
            <ScrollButton left onClick={() => scrollHandler('left')}>
                &lt;
            </ScrollButton>
            <ScrollButton onClick={scrollHandler}>></ScrollButton>
            {state.calendar.map((day, index) => (
                <DayTable
                    dayIndex={index}
                    //can I not send a prop? or I have to send it with null?
                    selectedCell={state.selectedCell[0] === index ? state.selectedCell[1] : null}
                    key={day.date}
                    times={day.timeslots}
                    date={day.date}
                    scrollPosition={scrollState}
                />
            ))}
        </StyledDaysTable>
    );
};

export default DaysTable;
