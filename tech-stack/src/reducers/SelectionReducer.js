export default (state = null /*initial state*/, action) => {
    // console.log(action);
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state; // return last state
    }
};
