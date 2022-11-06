export const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {

                counter: state.counter + 1
            }
        case "DECREMENT":
            return {

                counter: state.counter === 0 ? state.counter : state.counter - 1
            }
        case "SETVALUE":
            return {

                counter: state.counter === '' ? 0 : action.value
            }
        case "RESET":
            return {

                counter: state.counter = 0
            }
        default:
            return {
                counter: state.counter
            }
    }

}
export const initialState = {
    counter: 0
}