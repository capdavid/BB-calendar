import React, { useEffect, Fragment } from 'react';
import styled from '@emotion/styled';

import { useStore } from '../hooks/store';
import TimesTable from '../containers/TimesTable';
import DaysWrapper from '../containers/DaysWrapper';
import Spinner from '../components/Spinner';

const StyledDiv = styled.div`
    margin: 0 auto;
    max-width: 615px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 17px;
    border-radius: 10px;
    overflow: hidden;
`;

const CalendarContent = () => (
    <Fragment>
        <TimesTable />
        <DaysWrapper />
    </Fragment>
);

const Calendar = props => {
    const [state, dispatch] = useStore();

    useEffect(() => {
        fetch('https://interview-calendar-backend.herokuapp.com/api/calendar')
            .then(response => response.json())
            .then(responseData => {
                dispatch('SET_CALENDAR', responseData.calendar);
            })
            .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <StyledDiv>{state.loading ? <Spinner /> : <CalendarContent />}</StyledDiv>;
};

export default Calendar;
