import React, { useEffect, Fragment } from "react";
import styled from "@emotion/styled";

import { useStore } from "../hooks/store";
import TimesTable from "./TimesTable";
import DaysWrapper from "./DaysWrapper";
import Spinner from "../components/Spinner";

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 615px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 17px;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 800px) {
    max-width: 400px;
  }
`;

const StyledErrorDiv = styled.div`
  margin: 200px auto;
  color: red;
`;

const Calendar = () => {
  const [store, dispatch] = useStore();

  useEffect(() => {
    dispatch("FETCH_CALENDAR_REQUEST");
    fetch("https://interview-calendar-backend.herokuapp.com/api/calendar")
      .then(response => response.json())
      .then(responseData => {
        dispatch("FETCH_CALENDAR_SUCCESS", responseData.calendar);
      })
      .catch(err => dispatch("FETCH_CALENDAR_FAIL", err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledDiv>
      {store.error && (
        <StyledErrorDiv>
          Something went wrong.. Please reload the page.
        </StyledErrorDiv>
      )}

      {store.loading && !store.error && <Spinner />}

      {!store.loading && !store.error && (
        <Fragment>
          <TimesTable />
          <DaysWrapper />
        </Fragment>
      )}
    </StyledDiv>
  );
};

export default Calendar;
