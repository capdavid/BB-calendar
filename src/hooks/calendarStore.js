import { initStore } from "./store";

const storeConfig = () => {
  const actions = {
    FETCH_CALENDAR: (curState, dispatch) => {
      curState.loading = true;
      fetch("https://interview-calendar-backend.herokuapp.com/api/calendar")
        .then(response => response.json())
        .then(responseData => {
          dispatch("SET_CALENDAR", responseData.calendar);
        })
        .catch(err => dispatch("FETCH_CALENDAR_FAIL", err));
    },
    SET_CALENDAR: (curState, updatedState) => {
      return { calendar: updatedState, loading: false };
    },
    FETCH_CALENDAR_FAIL: (curState, err) => {
      console.log(err);
      return { error: true };
    },
    SELECT_TIMESLOT: (curState, cellData) => {
      //is this okay? get arguments as an array? is an object with keys better?
      // const updatedDay = curState.calendar[data[0]];
      // const timeslotIndex = updatedDay.timeslots.findIndex(t => t.id === data[1]);
      // const updatedItem = updatedDay.timeslots[timeslotIndex];
      // updatedItem.selected = true;
      return { selectedCell: cellData };
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
