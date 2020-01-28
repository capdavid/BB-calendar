import { initStore } from './store';

const storeConfig = () => {
    const actions = {
        SET_CALENDAR: (curState, updatedState) => {
            return { calendar: updatedState, loading: false };
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
        loading: true,
        selectedCell: []
    });
};

export default storeConfig;
