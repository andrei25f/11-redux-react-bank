import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { accountReducer } from "../reducer/accountReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const initialState = {
    balance: 0,
    quote: 'Winter is comeing'
}

export const store = createStore(accountReducer, initialState, applyMiddleware(thunk, logger));