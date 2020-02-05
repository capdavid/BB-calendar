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

const CalendarContent = () => (
  <Fragment>
    <TimesTable />
    <DaysWrapper />
  </Fragment>
);

const Calendar = props => {
  const [store, dispatch] = useStore();

  useEffect(() => {
    dispatch("FETCH_CALENDAR", dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderBasedOnStore = () => {
    if (store.error) {
      return (
        //Is this okay? styles like this?
        <StyledErrorDiv>
          Something went wrong.. Please reload the page.
        </StyledErrorDiv>
      );
    } else if (store.loading) {
      return <Spinner />;
    } else {
      return <CalendarContent />;
    }
  };

  return <StyledDiv>{renderBasedOnStore()}</StyledDiv>;
};

export default Calendar;
