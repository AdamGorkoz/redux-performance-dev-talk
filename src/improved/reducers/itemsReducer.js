import initialState from "./initialState";

const itemsReducer = (state = initialState.items,action) => {
    switch(action.type){
        case "TOGGLE_ITEM":
            const item = state.byId[action.id];
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.id] : { ...item, selected : !item.selected }
                }
            }
        default:
            return state;
    }
}

export default itemsReducer;