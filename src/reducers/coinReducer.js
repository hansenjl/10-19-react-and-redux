export default function coinReducer(state = {total: 0, text: "hello"}, action){
    switch(action.type){
        case "ADD":
            return {...state, total: state.total + action.payload}
        case "SUBTRACT":
            return {...state, total: state.total - action.payload}
        default:
            return state
    }  
}