import { useState, useEffect, useCallback } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
    const setState = useState(globalState)[1];

    const dispatch = useCallback((actionId, data) => {
        const newState = actions[actionId](globalState, data);
        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
        }
    }, []);

    useEffect(() => {
        listeners.push(setState);

        return () => {
            listeners = listeners.filter(li => li !== setState);
        };
    }, [setState]);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }
    actions = { ...actions, ...userActions };
};
