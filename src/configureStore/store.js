import { accountReducer } from "../reducer/accountReducer";
import { createStore } from "../redux/createStore";

const initialState = {
    balance: 0
}

export const store = createStore(accountReducer, initialState);