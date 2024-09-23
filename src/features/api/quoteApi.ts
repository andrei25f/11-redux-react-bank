import { AppDispatch } from "../../app/store"
import { putQuote } from "../quote/quoteSlice"

export const fetchQuote = () => {
    return (dispatch: AppDispatch) => {
        dispatch(putQuote('Pending...'))
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(e => dispatch(putQuote('Error getting quote')))
    }
}