import {
    configureStore,
    createReducer,
    createAction
} from 'redux-starter-kit'

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')


const counter = createReducer(0, {
    [increment]: state => state + 1,
    [decrement]: state => state - 1
})

const store = configureStore({
    reducer: counter
})

document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(increment())
})