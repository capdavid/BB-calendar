import { initStore } from "./store";

const storeConfig = () => {
  const actions = {
    FETCH_CALENDAR_REQUEST: () => {
      return { loading: true };
    },
    FETCH_CALENDAR_SUCCESS: (_curState, updatedState) => {
      return { calendar: updatedState, loading: false };
    },
    FETCH_CALENDAR_FAIL: (_curState, err) => {
      console.log(err);
      return { error: true };
    },
    SELECT_TIMESLOT: (_curState, dayIndex, cellIndex) => {
      return { selectedCell: { dayIndex, cellIndex } };
    }
  };
  initStore(actions, {
    calendar: [],
    loading: false,
    error: false,
    selectedCell: {}
  });
};

export default storeConfig;
