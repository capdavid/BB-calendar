import React from 'react';
import styled from '@emotion/styled';

import DayTable from '../components/DayTable';
import { useStore } from '../hooks/store';

const StyledDaysTable = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    transform: ${props => `translateX(calc(-${props.scrollPosition}*33%))`};
    transition: all 0.5s;
    @media (max-width: 800px) {
        transform: ${props => `translateX(calc(-${props.scrollPosition}*50%))`};
    }
`;

const DaysTable = props => {
    const state = useStore()[0];

    const scrollBasedOnProps = () => {
        let scrollPosition;
        scrollPosition = props.scrollPosition;
        return scrollPosition;
    };

    const scrollPosition = scrollBasedOnProps();

    return (
        <StyledDaysTable scrollPosition={scrollPosition}>
            {state.calendar.map((day, index) => (
                <DayTable
                    dayIndex={index}
                    //can I not send a prop? or I have to send it with null?
                    selectedCell={state.selectedCell[0] === index ? state.selectedCell[1] : null}
                    key={day.date}
                    times={day.timeslots}
                    date={day.date}
                />
            ))}
        </StyledDaysTable>
    );
};

export default DaysTable;
