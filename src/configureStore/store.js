import { legacy_createStore as createStore } from "redux";
import { accountReducer } from "../reducer/accountReducer";

const initialState = {
    balance: 0,
    quote: 'Winter is comeing'
}

export const store = createStore(accountReducer, initialState);