import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { useStore } from '../hooks/store';

import DaysTable from '../containers/DaysTable';
import ScrollButton from '../components/ScrollButton';

const StyledDaysWrapper = styled.div`
    width: 70%;
    display: flex;
    position: relative;
`;

const DaysWrapper = () => {
    const state = useStore(false)[0];
    const [scrollState, setScrollState] = useState(0);

    const scrollHandler = useCallback(
        direction => {
            let scrollPos = scrollState;
            let maxDayCount;
            if (window.innerWidth < 800) {
                maxDayCount = state.calendar.length - 2;
            } else {
                maxDayCount = state.calendar.length - 3;
            }

            if (direction === 'left' && scrollPos > 0) {
                scrollPos--;
            } else if (direction !== 'left' && scrollPos < maxDayCount) {
                scrollPos++;
            }
            setScrollState(scrollPos);
        },
        [scrollState, state.calendar.length]
    );
    return (
        <StyledDaysWrapper>
            <ScrollButton left onClick={() => scrollHandler('left')}>
                &lt;
            </ScrollButton>
            <ScrollButton onClick={scrollHandler}>></ScrollButton>
            <DaysTable scrollPosition={scrollState} />
        </StyledDaysWrapper>
    );
};

export default DaysWrapper;
