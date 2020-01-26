import React, { useEffect, useCallback, Fragment } from 'react';
import styled from '@emotion/styled';

import { useStore } from '../hooks/store';
import TimesTable from '../containers/TimesTable';
import DaysTable from '../containers/DaysTable';
import Spinner from '../components/Spinner';

const Calendar = props => {
    const [state, dispatch] = useStore();
    const setCalendar = useCallback(
        data => {
            dispatch('SET_CALENDAR', data);
        },
        [dispatch]
    );
    useEffect(() => {
        fetch('https://interview-calendar-backend.herokuapp.com/api/calendar')
            .then(response => response.json())
            .then(responseData => {
                setCalendar(responseData.calendar);
            })
            .catch(err => console.log(err));
    }, [setCalendar]);

    const calendar = (
        <Fragment>
            <TimesTable />
            <DaysTable />
        </Fragment>
    );

    const StyledDiv = styled.div`
        margin: 0 auto;
        max-width: 615px;
        /* background: blue; */
        display: flex;
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 17px;
        border-radius: 10px;
        overflow: hidden;
    `;
    return <StyledDiv>{state.loading ? <Spinner /> : calendar}</StyledDiv>;
};

export default Calendar;
