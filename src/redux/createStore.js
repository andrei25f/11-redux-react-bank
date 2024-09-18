export const createStore = (reducer, initialState) => {
    let state = initialState;
    let subscribers = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);
        subscribers.forEach(callback => callback());
    }

    function subscribe(callback) {
        subscribers.push(callback);
        return () => subscribers = subscribers.filter(fn => fn !== callback);
    }

    return {getState, dispatch, subscribe}
}