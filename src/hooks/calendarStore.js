import { initStore } from "./store";

const storeConfig = () => {
  const actions = {
    FETCH_CALENDAR_REQUEST: () => {
      return { loading: true };
    },
    FETCH_CALENDAR_SUCCESS: (curState, updatedState) => {
      return { calendar: updatedState, loading: false };
    },
    FETCH_CALENDAR_FAIL: (curState, err) => {
      console.log(err);
      return { error: true };
    },
    SELECT_TIMESLOT: (curState, dayIndex, cellIndex) => {
      return { selectedCell: [dayIndex, cellIndex] };
    }
  };
  initStore(actions, {
    calendar: [],
    loading: false,
    error: false,
    selectedCell: []
  });
};

export default storeConfig;
