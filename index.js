import {
    createStore
} from 'redux'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'


function increment() {
    return {
        type: INCREMENT
    }
}

function decrement() {
    return {
        type: DECREMENT
    }
}

function counter(state = 0, action) {
    console.log(`previous state: ${state}`)
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

const store = createStore(counter)

document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(increment())
})