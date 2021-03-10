const ADD = "ADD"
const SUBTRACT = "SUBTRACT"

export const addToTotal = (amount) => ({type: ADD, payload: amount})

export const addPenny = () => ({type: ADD, payload: 1})

export const subtractFromTotal = (amount) => ({type: SUBTRACT, payload: amount})